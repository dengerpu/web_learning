// 实现promiseA+

// promise的规范
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

/**
 * 运行一个微任务队列
 * 把传递的函数放到微任务队列中
 * @param {*} callback 
 */
function runMicroTask(callback) {
    // 判断node环境
    // globalThis是一个关键字，指代全局对象，浏览器环境为window，node环境为global
    if(globalThis.process && globalThis.process.nextTick) {
        process.nextTick(callback);
    } else if (globalThis.MutationObserver) {
        const p = document.createElement('p');
        const observer = new MutationObserver(callback);
        observer.observe(p, {
            childList: true // 观察元素内部的变化
        })
        p.innerHTML = "1";
    } else {
        setTimeout(callback, 0);
    }
}

/**
 * 判断一个数据是否是promise对象
 * @param {*} obj 
 * @returns 
 */
function isPromise(obj) {
    return !!(obj && typeof obj === "object" && typeof obj.then === "function");
}

class myPromise {
    /**
     * 创建一个Promise
     * @param {*} executor 任务执行器，立即执行
     */
    constructor(executor) {
        this._state = PENDING; // 状态
        this._value = undefined; // 数据
        this._handlers = []; // 处理函数形成的队列
        try {
            executor(this._resolve.bind(this), this._reject.bind(this));
        } catch (error) {
            this._reject(error);
            console.log(error);
        }
    }
    /**
     * 向处理队列中添加一个函数
     * @param {*} executor 添加的函数
     * @param {*} state 该函数什么状态下执行
     * @param {*} resolve 让then函数返回的Promise成功
     * @param {*} reject 让then函数返回的Promise失败
     */
    _pushHandler(executor, state, resolve, reject) {
        this._handlers.push({
            executor, state, resolve, reject
        })
    }
    /**
     * 执行队列
     * @returns 
     */
    _runHandlers() {
        if(this._state === PENDING) {
            // 目前任务仍被挂起
            return;
        }
        while(this._handlers[0]) {
            const hander = this._handlers[0];
            this._runOneHanler(hander);
            this._handlers.shift();
        }
    }

    /**
     * 处理一个han
     * @param {*} param0 
     */
    _runOneHanler({ executor, state, resolve, reject }) {
        runMicroTask(() => {
            if(this._state !== state) {
                // 状态不一致，不处理
                return;
            }
            if(typeof executor !== "function") {
                this._state === FULFILLED ? resolve(this._value) : reject(this._value);
                return;
            }
            try {
                const result = executor(this._value);
                if(isPromise(result)) {
                    result.then(resolve, reject);
                } else {
                    resolve(result);
                }
            } catch(error) {
                reject(error);
                console.error(error);
            }
        })
    }

    /**
     * Promise A+规范的then
     * @param {*} onFulfilled 
     * @param {*} onRejected 
     * @returns 
     */
    then(onFulfilled, onRejected) {
        return new myPromise((resolve, reject) => {
            this._pushHandler(onFulfilled, FULFILLED, resolve, reject);
            this._pushHandler(onRejected, REJECTED, resolve, reject);
            this._runHandlers();
        });
    }

    /**
     * 仅处理失败的场景
     * @param {*} onRejected 
     * @returns 
     */
    catch(onRejected) {
        return this.then(null, onRejected);
    }

    /**
     * 无论成功还是失败都会回调
     * @param {*} onSettled 
     */
    finally(onSettled) {
        return this.then(
            (data) => {
                onSettled();
                return data;
            },
            (reason) => {
                onSettled();
                return reason;
            }
        )
    }
    /**
     * 更改任务状态
     * @param {*} newState 
     * @param {*} value 
     * @returns 
     */
    _changeState(newState, value) {
        if(this._state !== PENDING) {
            // 状态不可逆，只支持pending->fulfilled || rejected
            return;
        }
        this._state = newState;
        this._value = value;
        this._runHandlers(); // 状态变化，执行队列
    }

    /**
     * 标记当前任务完成
     * @param {*} data 任务完成的相关数据
     */
    _resolve(data) {
        this._changeState(FULFILLED, data);
    }

    /**
     * 标记当前任务失败
     * @param {*} reason 任务失败的相关数据 
     */
    _reject(reason) {
        this._changeState(REJECTED, reason);
    }
}
const promise = new myPromise((resolve, reject) => {
    resolve(1);
});
promise.then((data) => {
    console.log(data);
})

module.exports = myPromise;
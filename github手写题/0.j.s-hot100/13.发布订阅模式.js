class EventEmitter {
    constructor() {
        // key: 事件名
        // value: callback []回调数组
        this.events = {};
    }
    on(name, callback) {
        if(this.events[name]) {
            this.events[name].push(callback);
        } else {
            this.events[name] = [callback];
        }
    }
    off(name, callback) {
        if(!this.events[name]) return;
        if(!callback) {
            // 如果没有callback，就删掉整个事件
            this.events[name] = undefined;
        }
        this.events[name] = this.events[name].filter(item => item !== callback);
    }
    emit(name, ...args) {
        if(!this.events[name]) return;
        this.events[name].forEach(cb => cb(...args));
    }
}
class EventEmitter {
    constructor() {
        this.events = {};
    }

    // 订阅事件
    on(event, listener) {
        if(!this.events[event]) {
            this.events[event] = [];
        }
        // 添加订阅者
        this.events[event].push(listener);
    }
    // 发布事件
    emit(event, ...args) {
        if(this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }
    // 移除订阅者
    off(event, listener) {
        if(this.events[event]) {
            // 从事件数组中移除指定的订阅者
            this.events[event] = this.events[event].filter(fn => fn !== listener);
        }
    }
}

// 使用示例
const emitter = new EventEmitter();

const listener1 = (message) => {
  console.log(`Listener 1 received: ${message}`);
};

const listener2 = (message) => {
  console.log(`Listener 2 received: ${message}`);
};

// 订阅事件
emitter.on('message', listener1);
emitter.on('message', listener2);

// 发布事件
emitter.emit('message', 'Hello, world!');

// 移除订阅者
emitter.off('message', listener1);

// 再次发布事件，只有listener2会收到消息
emitter.emit('message', 'Goodbye, world!');
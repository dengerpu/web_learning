// 手写实现Vue.js的数组、对象响应式监听
// 利用Object.defineProperty(obj, prop, descriptor)实现
// 参数列表：
// obj：需要定义属性的对象
// prop：需要定义的属性
// descriptor：属性的描述描述符
// 返回值：返回此对象

// 基本流程：遍历为数组、对象的每一个值、属性进行绑定监听函数，
// 为每个属性分配一个订阅者集合的管理数组dep；然后在编译的时候在该属性的数组dep中添加订阅者
// 当值改变的时候，就会通知更新，作为发布者发出通知
// 将事件发送给dev中存储的对应订阅者watcher，并调用对应的update方法更新视图

function observe(target) {
    // 不是对象或者数组直接返回
    if(typeof target !== "object" || target === null) return target;
    // 如果是数组则需要改变原型
    if(Array.isArray(target)) {
        let arrPrototype = Array.prototype;
        const arrProto = Object.create(arrPrototype);
        target.forEach((methodName) => {
            console.log('methodName', methodName);
            arrProto[methodName] = function () {
                arrPrototype[methodName].call(this, ...arguments);
            }
        })
        target.__prorto__ = arrProto;
    }
    for(let key in target) {
        // 遍历
        defineProperty(target, key, target[key]);
    }
}

function defineProperty(target, key, value) {
    // 递归监听
    observe(value);

    Object.defineProperty(target, key, {
        get() {
            console.log('触发get方法');
            return value;
        },
        set(newValue) {
            if(newValue !== value) {
                console.log('触发set方法');
                update(value, newValue);
                value = newValue;
                observe(newValue); // 赋值的新值，也要成为响应式对象
            }
        }
    })
}
function update(oldValue, newValue) {
    //模拟更新操作
    console.log(`oldValue: ${oldValue}, newValue: ${newValue}`);
}

let obj = {
    a: {
      b: 1,
      c: 2,
    },
    d: 4,
};
  
observe(obj); //监听对象，绑定defineProperty方法
console.log(obj.a.b); //调用get方法
obj.a.b = 3; //直接修改b的值 监听成功
obj.a = 4; //把a赋值成基本类型 监听成功
obj.d = 5; //直接修改d的值 监听成功
obj.d = {
    //把d修改成对象 监听成功
    e: 8,
  };
  
  let arr = ["test", "try", ["deep"]];
  observe(arr); //监听数组，绑定defineProperty方法
  console.log(arr[0]); //调用get方法
  arr[0] = "change"; //修改数组的第一层值
  arr[2][0] = "66" // 修改数组的第二层值
  console.log(arr[2]); //验证修改成功
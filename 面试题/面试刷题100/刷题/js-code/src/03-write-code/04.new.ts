/**
 * 手写new
 * @param constructor 
 * @param args 
 * @returns 
 */
export function customNew<T>(constructor: Function, ...args: any[]): T {
  // 1.创建一个空对象，继承构造函数的原型
  let obj = Object.create(constructor.prototype)
  // 将构造函数的this指向obj
  constructor.apply(obj, args)
  // 返回对象
  return obj
}

class Foo {
    // 属性
    name: string
    city: string
    n: number

    constructor(name: string, n: number) {
        this.name = name
        this.city = '北京'
        this.n = n
    }

    getName() {
        return this.name
    }
}

// const f = new Foo('张三', 100)
// const f = customNew<Foo>(Foo, '张三', 100)
// console.info(f)
// console.info(f.getName())
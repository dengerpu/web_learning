// 寄生组合式继承
function Parent(name) {
    this.name = name;
}
Parent.prototype.getName = function() {
    return this.name;
}
function Son(name, age) {
    // Parent的this指向了Son  相当于this.name = name;
    Parent.call(this, name);
    this.age = age;
}
Son.prototype.getAge = function() {
    return this.age;
}
Son.prototype.__proto__ = Object.create(Parent.prototype);

const son1 = new Son('dep', 20);
console.log(son1.getName());
console.log(son1.getAge());
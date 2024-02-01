const a = () => {
  console.log("a");
}

let obj = {aaa: 1111, bbb: 2222, ccc: 3333};

class Student{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  out() {
    console.log(this.name, this.age);
  }
}


export {
  a,
  obj,
  Student
}
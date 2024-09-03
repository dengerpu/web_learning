const obj1 = { a: "11", b: { c: "22" } };
const obj2 = { a: "11", b: { c: "23" } };

function isEqual(obj1, obj2) {
  // 先判断类型
  if (typeof obj1 !== typeof obj2) {
    return false;
  }
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  for(const key of arr1){
    if(typeof obj1[key] === 'object' || typeof obj2[key] === "object"){
      return isEqual(obj1[key],obj2[key]);
    }else if(obj1[key] !== obj2[key]){
        return false
    }
  }
  return true;
}
console.log(isEqual(obj1, obj2));
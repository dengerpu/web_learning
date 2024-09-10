function isCyclic(obj) {
   let seenObjects = new WeakSet();
   function detect(obj) {
    if(typeof obj === 'object') {
        if(seenObjects.has(obj)) {
            return true;
        }
        seenObjects.add(obj);
        for(let key in obj) {
            if(detect(obj[key])) {
                return true;
            }
        }
    }
    return false;
   } 
   return detect(obj);
}
let cyclicObj1 = {};
cyclicObj1.selfRef = cyclicObj1;

let cyclicObj2 = { a: { b: null } };
cyclicObj2.a.b = cyclicObj2.a;

console.log(isCyclic(cyclicObj1)); // 输出：true
console.log(isCyclic(cyclicObj2)); // 输出：true
console.log(isCyclic({})); // 输出：false
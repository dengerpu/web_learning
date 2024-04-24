
function totalFruit(fruits) {
  let res = 0, left = 0;
  let map = new Map();
  for(let right = 0; right < fruits.length; right++) {
    map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);
    while(map.size > 2) {
      map.set(fruits[left], map.get(fruits[left]) - 1);
      if(map.get(fruits[left]) === 0) {
        map.delete(fruits[left]);
      }
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
}

console.log(totalFruit([1,2,3,2,2]))
console.log(totalFruit([0,1,2,2]))
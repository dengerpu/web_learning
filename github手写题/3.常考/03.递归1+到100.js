 function sum(i) {
    if(i > 100) return 0;
    return i + sum(i+1);
 }
 console.log(sum(1));

function sum2(min, max){
    if(min === max) return min;
    return min + sum2(min + 1, max);
 }
 console.log(sum2(1, 100));

 function sum3(max = 0, total = 0) {
    return max === 0 ? total : sum3(max - 1, total + max) 
 }
 console.log(sum3(100, 0))
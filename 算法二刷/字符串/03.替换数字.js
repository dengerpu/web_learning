
// 如果不借助辅助空间，就要先计算出有多少个数字，然后对数组进行扩充。
// 最后从后往前遍历，进行元素的替换
var replaceNumber = function(s) {
    let ans = '';
    for(let i = 0; i < s.length; i++){
        if(s[i] >= '0' && s[i] <= '9'){
            ans += 'number';
        }else{
            ans += s[i];
        }
    }
    return ans;
}
console.log(replaceNumber('a1b2c3'));
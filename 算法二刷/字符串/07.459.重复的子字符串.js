/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let str = s + s;
    // 截取掉第一个和最后一个是防止找到自己
    return str.substring(1, str.length - 1).includes(s);
};
console.log(repeatedSubstringPattern("abab"))
console.log(repeatedSubstringPattern("aba"))
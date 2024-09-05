let url = 'www.baidu.toutiao.com'
function reverseUrl(url) {
  let arr = url.split('.')
  return arr.reverse().join('.')
}
function reverseUrl2(url) {
  let arr = url.split('.')
  return arr.reduce((pre, cur) => {
    return cur + '.' + pre
  }, '')
}
function reverseUrl3(str) {
    const len = str.length;
    let res = '';
    let i, j = 0;
    while(j < len) {
        if(str[j] === '.') {
            res = '.' + str.slice(i, j) + res;
            i = ++j;
        } else {
            j++;
        }
    }
    res = str.slice(i, j) + res; // 最后一个域名没有点，所以需要单独处理
    return res;
}
console.log(reverseUrl(url))
console.log(reverseUrl2(url))
console.log(reverseUrl3(url))
function extendsString(str) {
    let num = 0;
    let curr = '';
    let res = '';
    for(let i = 0; i < str.length; i++) {
        if(!isNaN(Number(str[i]))) { // 数字
            if(curr) {
                res += curr.repeat(num);
                curr = '';
                num = 0;
            }
            num = num * 10 + Number(str[i]);
        } else { // 字母
            curr += str[i];
        }
    }
    res += curr.repeat(num);
    return res;
}
var extendsString = (str) => str.replace(/(\d+)([a-z]+)/g, (_, $1, $2) => $2.repeat(parseInt($1)));

console.log(extendsString('50a6we8y20x'));
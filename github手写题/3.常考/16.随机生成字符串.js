function randomString(len) {
    len = len || 32;
    const t = 'abcdefghigklmnopqrstuvwxyz123456798'; //模拟随机字符串库
    const tLen = t.length;
    let res = '';
    for(let i = 0; i < len; i++) {
        res += t.charAt(Math.floor(Math.random() * tLen));
    }
    return res;
}
console.log(randomString(20));
function getReverseNumber(num){
    const res = [];
    for(let i = 10; i <= num; i++) {
        let a = i.toFixed();
        let b = a.split('').reverse().join('');
        if(a == b) {
            res.push(b);
        }
    }
    return res;
}
console.log(getReverseNumber(10000));
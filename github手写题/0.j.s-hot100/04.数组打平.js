Array.prototype.flat2 = function (deep = 1) {
    if (deep <= 0) return this.slice()
    let res = [];
    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i])) {
            res = res.concat(this[i].flat2(deep - 1))
        } else {
            res.push(this[i])
        }
    }
    return res;
}
console.log([1, [2, [3, [4, [5]]]]].flat2(Infinity));
var SingleTon = /** @class */ (function () {
    function SingleTon() {
    }
    SingleTon.getInstance = function () {
        if (!this.instance) {
            this.instance = new SingleTon();
        }
        return this.instance;
    };
    SingleTon.prototype.fn = function () { };
    SingleTon.instance = null;
    return SingleTon;
}());
// new SingleTon() // 报错
var s = SingleTon.getInstance();
var s2 = SingleTon.getInstance();
console.log(s === s2); // true

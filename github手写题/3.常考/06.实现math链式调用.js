class Math {
    constructor(initValue = 0) {
        this.value = initValue;
    }
    add(...args) {
        this.value = args.reduce((prev, curr) => prev + curr, this.value);
        return this;
    }
    minus(...args) {
        this.value = this.value - args.reduce((prev, curr) => prev + curr);
        return this;
    }
    times(timer) {
        this.value = timer * this.value;
        return this;
    }
    getVal() {
        return this.value;
    }
}
console.log(new Math().add(2,4).minus(3).times(2));
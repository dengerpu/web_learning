const count = {
    value: 0,
    add(newValue) {
        this.value += newValue;
        return this;
    },
    del(newValue) {
        this.value -= newValue;
        return this;
    },
    sout() {
        return this.value;
    }
}
console.log(count.add(1).add(2).del(1).sout());

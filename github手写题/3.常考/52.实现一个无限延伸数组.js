function * infiniteArrayGenerator() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const infiniteArray = infiniteArrayGenerator();

console.log(infiniteArray.next().value); // 0
console.log(infiniteArray.next().value); // 1
console.log(infiniteArray.next().value); // 2
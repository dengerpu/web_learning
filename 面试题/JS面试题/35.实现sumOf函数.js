function sum(...args) {
  let total = args.reduce((acc, val) => acc + val, 0);

  function add(...nextArgs) {
      total += nextArgs.reduce((acc, val) => acc + val, 0);
      return add;
  }

  add.sumOf = function() {
      return total;
  };

  return add;
}

console.log(sum(1, 2).sumOf()); // 3
console.log(sum(1)(2, 3).sumOf()); // 6
console.log(sum(4, 5)(6)(7).sumOf()); // 22
console.log(sum(1)(2)(3).sumOf()); // 6

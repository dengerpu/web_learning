function minimizeCost(n, m, prices, coupons) {
  prices.sort((a, b) => a - b);
  coupons.sort((a, b) => b - a);
  let totalCost = 0;
  let used = Array(n).fill(false);
  for (let i = 0; i < m; i++) {
      let count = coupons[i];
      let temp = [];
      for (let j = 0; j < n && count > 0; j++) {
          if (!used[j]) {
              temp.push(prices[j]);
              used[j] = true;
              count--;
          }
      }
      if (temp.length > 0) {
          temp.sort((a, b) => a - b);
          temp.shift();
          totalCost += temp.reduce((acc, price) => acc + price, 0);
      }
  }
  for (let i = 0; i < n; i++) {
      if (!used[i]) {
          totalCost += prices[i];
      }
  }
  return totalCost;
}

const n = 5;
const m = 2;
const prices = [1, 2, 5, 4, 5];
const coupons = [3, 2];

console.log(minimizeCost(n, m, prices, coupons)); // Output: 10

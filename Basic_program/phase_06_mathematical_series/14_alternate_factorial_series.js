// ==========================================
// Problem: Alternate factorial series
// Category: mathematical_series
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function factorial(num) {
  let fact = 1;
  for (let index = 1; index <= num; index++) {
    fact *= index;
  }
  return fact;
}

function solve() {
  // TODO: implement
  let series_sum = 0;
  let x = 2;
  for (let index = 1; index <= 5; index++) {
    let term = Math.pow(x, index) / factorial(index);
    if (index % 2 === 0) {
      series_sum -= term;
    } else {
      series_sum += term;
    }
  }
  console.log(series_sum);
}

solve();

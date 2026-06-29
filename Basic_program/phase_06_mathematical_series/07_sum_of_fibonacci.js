// ==========================================
// Problem: Sum of Fibonacci
// Category: mathematical_series
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let fibo_sum = 0;
  let first = 0;
  let second = 1;
  for (let index = 1; index <= n; index++) {
    if (index === 1) {
      fibo_sum += first;
      continue;
    }
    if (index === 2) {
      fibo_sum += second;
      continue;
    }
    let third = first + second;
    fibo_sum += third;
    first = second;
    second = third;
  }
  console.log(fibo_sum);
}

solve(10);

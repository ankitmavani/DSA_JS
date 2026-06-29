// ==========================================
// Problem: Fibonacci series
// Category: mathematical_series
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let fibo_ser = [];
  let first = 0;
  let second = 1;
  for (let index = 1; index <= n; index++) {
    if (index === 1) {
      fibo_ser.push(first);
      continue;
    }
    if (index === 2) {
      fibo_ser.push(second);
      continue;
    }
    let third = first + second;
    fibo_ser.push(third);
    first = second;
    second = third;
  }
  console.log(fibo_ser);
}

solve(10);

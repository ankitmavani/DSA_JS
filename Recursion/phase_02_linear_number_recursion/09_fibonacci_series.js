// ==========================================
// Problem: Fibonacci series
// Category: phase_02_linear_number_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function fibo(num) {
  if (num === 0 || num === 1) return num;
  return fibo(num - 1) + fibo(num - 2);
}

function solve(num) {
  // TODO: implement
  if (num === 0) {
    return;
  }
  solve(num - 1);
  console.log(fibo(num - 1));
}

solve(10);

// ==========================================
// Problem: Nth Fibonacci number
// Category: phase_02_linear_number_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  if (num === 1 || num === 0) return num;
  return solve(num - 1) + solve(num - 2);
}

console.log(solve(8));

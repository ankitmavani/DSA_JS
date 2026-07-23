// ==========================================
// Problem: Sum of first n natural numbers
// Category: phase_02_linear_number_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  if (num === 0) return 0;
  return num + solve(num - 1);
}

console.log(solve(5));

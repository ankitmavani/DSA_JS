// ==========================================
// Problem: Factorial
// Category: phase_02_linear_number_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  if (num === 0) return 1;
  return num * solve(num - 1);
}

console.log(solve(5));

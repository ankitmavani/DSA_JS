// ==========================================
// Problem: Reverse a number
// Category: phase_02_linear_number_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num, rev = 0) {
  // TODO: implement
  if (!num) return rev;
  rev = rev * 10 + (num % 10);
  return solve(parseInt(num / 10), rev);
}

console.log(solve(12345));

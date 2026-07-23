// ==========================================
// Problem: Count digits
// Category: phase_02_linear_number_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  if (!num) return 0;
  return 1 + solve(parseInt(num / 10));
}

console.log(solve(123456));

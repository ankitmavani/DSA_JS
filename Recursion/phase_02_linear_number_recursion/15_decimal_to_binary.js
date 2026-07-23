// ==========================================
// Problem: Decimal to Binary
// Category: phase_02_linear_number_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  if (!num) return '';
  return solve(parseInt(num / 2)) + (num % 2);
}

console.log(solve(101));

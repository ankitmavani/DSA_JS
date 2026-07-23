// ==========================================
// Problem: Decimal to Octal
// Category: phase_02_linear_number_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  if (!num) return '';
  return solve(parseInt(num / 8)) + (num % 8);
}

console.log(solve(100));

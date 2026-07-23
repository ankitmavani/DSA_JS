// ==========================================
// Problem: Power x raised to n
// Category: phase_02_linear_number_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num, pow) {
  // TODO: implement
  if (pow === 0) return 1;
  return num * solve(num, pow - 1);
}

console.log(solve(2, 4));

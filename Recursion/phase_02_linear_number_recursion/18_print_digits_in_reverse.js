// ==========================================
// Problem: Print digits in reverse
// Category: phase_02_linear_number_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  if (!num) return;
  console.log(num % 10);
  solve(parseInt(num / 10));
}

solve(12345);

// ==========================================
// Problem: Print digits one by one
// Category: phase_02_linear_number_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  if (!num) return;
  solve(parseInt(num / 10));
  console.log(num % 10);
}

solve(12345);

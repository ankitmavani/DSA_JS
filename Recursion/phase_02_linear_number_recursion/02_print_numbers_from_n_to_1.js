// ==========================================
// Problem: Print numbers from n to 1
// Category: phase_02_linear_number_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  if (num === 0) return;
  console.log(num);
  solve(num - 1);
}

solve(5);

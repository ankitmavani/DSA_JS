// ==========================================
// Problem: Dry run recursion and call stack
// Category: phase_01_recursion_mindset
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  if (num === 0) return;
  console.log(num);
  solve(num - 1);
}

solve(5);

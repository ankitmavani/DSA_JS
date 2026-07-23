// ==========================================
// Problem: Print numbers from 1 to n after recursive call
// Category: phase_01_recursion_mindset
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  if (num === 0) return;
  solve(num - 1);
  console.log(num);
}

solve(5);

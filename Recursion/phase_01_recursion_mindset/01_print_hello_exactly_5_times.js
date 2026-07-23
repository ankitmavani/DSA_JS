// ==========================================
// Problem: Print Hello exactly 5 times
// Category: phase_01_recursion_mindset
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  if (num === 0) return;
  console.log('hello');
  solve(num - 1);
}

solve(5);

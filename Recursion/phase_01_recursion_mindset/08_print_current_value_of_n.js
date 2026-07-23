// ==========================================
// Problem: Print current value of n
// Category: phase_01_recursion_mindset
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  if (num === 0) {
    return;
  }
  console.log(num);
  solve(num - 1);
}

solve(5);

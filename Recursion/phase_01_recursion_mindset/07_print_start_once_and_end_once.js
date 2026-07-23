// ==========================================
// Problem: Print Start once and End once
// Category: phase_01_recursion_mindset
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  if (num === 0) {
    console.log('end');
    return;
  }
  if (num === 5) {
    console.log('Start');
  }
  console.log(num);
  solve(num - 1);
}

solve(5);

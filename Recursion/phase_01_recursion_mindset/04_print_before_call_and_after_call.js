// ==========================================
// Problem: Print Before Call and After Call
// Category: phase_01_recursion_mindset
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  if (num === 0) return;

  console.log('before:', num);
  solve(num - 1);
  console.log('after:', num);
}

solve(5);

// ==========================================
// Problem: Sum of first n odd numbers
// Category: phase_03_mathematical_thinking
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  if (num === 0) return 0;
  return (num % 2 !== 0 ? num : 0) + solve(num - 1);
}

console.log(solve(10));

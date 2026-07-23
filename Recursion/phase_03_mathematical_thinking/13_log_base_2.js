// ==========================================
// Problem: Log base 2
// Category: phase_03_mathematical_thinking
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  if (num === 1) return 0;
  return 1 + solve(parseInt(num / 2));
}

console.log(solve(32));

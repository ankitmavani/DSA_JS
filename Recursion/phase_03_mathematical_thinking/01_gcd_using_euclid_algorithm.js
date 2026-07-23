// ==========================================
// Problem: GCD using Euclid algorithm
// Category: phase_03_mathematical_thinking
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(a, b) {
  // TODO: implement
  if (b === 0) {
    return a;
  }
  return solve(b, a % b);
}

console.log(solve(48, 12));

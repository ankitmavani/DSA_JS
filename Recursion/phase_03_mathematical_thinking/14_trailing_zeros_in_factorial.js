// ==========================================
// Problem: Trailing zeros in factorial
// Category: phase_03_mathematical_thinking
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

// This counting method runs in O(log₅ n) time and is the standard interview solution.
function solve(num) {
  // TODO: implement
  if (num % 5 !== 0) return 0;
  return num / 5 + solve(num / 5);
}

console.log(solve(5));

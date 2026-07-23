// ==========================================
// Problem: Count prime digits
// Category: phase_03_mathematical_thinking
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  if (!num) return 0;
  let digit = num % 10;
  if (digit === 2 || digit === 3 || digit === 5 || digit === 7) {
    return 1 + solve(parseInt(num / 10));
  }
  return solve(parseInt(num / 10));
}

console.log(solve(237456));

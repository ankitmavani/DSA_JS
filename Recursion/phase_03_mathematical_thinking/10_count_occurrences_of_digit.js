// ==========================================
// Problem: Count occurrences of digit
// Category: phase_03_mathematical_thinking
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num, digit) {
  // TODO: implement
  if (!num) return 0;
  if (digit === num % 10) {
    return 1 + solve(parseInt(num / 10), digit);
  }
  return solve(parseInt(num / 10), digit);
}

console.log(solve(55555, 5));

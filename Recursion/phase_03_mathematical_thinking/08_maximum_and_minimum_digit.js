// ==========================================
// Problem: Maximum and minimum digit
// Category: phase_03_mathematical_thinking
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(
  num,
  max = Number.NEGATIVE_INFINITY,
  min = Number.POSITIVE_INFINITY,
) {
  // TODO: implement
  if (!num) return [max, min];
  let digit = num % 10;
  if (digit > max) max = digit;
  if (digit < min) min = digit;
  return solve(parseInt(num / 10), max, min);
}

console.log(solve(23745916));

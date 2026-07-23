// ==========================================
// Problem: Fast exponentiation
// Category: phase_03_mathematical_thinking
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num, pow) {
  // TODO: implement
  if (pow === 1) {
    return num;
  }
  if (pow === 0) {
    return 1;
  }
  if (pow === 2) {
    return num * num;
  }
  if (pow % 2 === 0) {
    return solve(solve(num, pow / 2), 2);
  }
  return num * solve(solve(num, (pow - 1) / 2), 2);
}

console.log(solve(4, 10));

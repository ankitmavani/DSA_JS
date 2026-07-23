// ==========================================
// Problem: LCM using recursion
// Category: phase_03_mathematical_thinking
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function gcd(a, b) {
  // TODO: implement
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function solve(a, b) {
  // TODO: implement
  return (a * b) / gcd(a, b);
}

console.log(solve(12, 18));

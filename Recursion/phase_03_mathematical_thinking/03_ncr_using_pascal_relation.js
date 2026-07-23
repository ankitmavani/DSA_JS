// ==========================================
// Problem: nCr using Pascal relation
// Category: phase_03_mathematical_thinking
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n, r) {
  // TODO: implement
  if (n === r || r === 0) return 1;
  return solve(n - 1, r - 1) + solve(n - 1, r);
}

console.log(solve(5, 2));

// ==========================================
// Problem: Geometric progression
// Category: mathematical_series
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

// $$a_n = a \cdot r^{(n-1)}$$
function solve() {
  // TODO: implement
  let first_term = 2;
  let ratio = 3;
  let n = 5;
  for (let index = 1; index <= n; index++) {
    console.log(`${first_term * Math.pow(ratio, index - 1)}`);
  }
}

solve();

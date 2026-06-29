// ==========================================
// Problem: x power series
// Category: mathematical_series
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

// $$S_n = \frac{x^{n+1} - 1}{x - 1}$$
function solve() {
  // TODO: implement
  let x = 2;
  let n = 5;
  console.log((Math.pow(x, n + 1) - 1) / (x - 1));
}

solve();

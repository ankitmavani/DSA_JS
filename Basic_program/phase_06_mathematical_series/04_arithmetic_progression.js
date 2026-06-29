// ==========================================
// Problem: Arithmetic progression
// Category: mathematical_series
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

// a_n = a + (n - 1)d
function solve() {
  // TODO: implement
  let a = 3;
  let d = 4;
  let n = 5;
  for (let index = 1; index <= n; index++) {
    console.log(`${a + (index - 1) * d}`);
  }
}

solve();

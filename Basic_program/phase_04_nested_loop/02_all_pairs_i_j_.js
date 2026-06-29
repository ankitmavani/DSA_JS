// ==========================================
// Problem: All pairs (i, j)
// Category: nested_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  for (let index_i = 1; index_i <= n; index_i++) {
    for (let index_j = 1; index_j <= n; index_j++) {
      console.log(index_i, index_j);
    }
  }
}

solve(3);

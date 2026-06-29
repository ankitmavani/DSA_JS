// ==========================================
// Problem: Number triangle pattern
// Category: nested_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  for (let index_i = 1; index_i <= n; index_i++) {
    let row = '';
    for (let index_j = 1; index_j <= index_i; index_j++) {
      row += index_j + ' ';
    }
    console.log(row);
  }
}

solve(5);

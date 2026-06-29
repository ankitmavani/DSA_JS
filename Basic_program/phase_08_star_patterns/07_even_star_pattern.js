// ==========================================
// Problem: Even star pattern
// Category: star_patterns
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  for (let index_i = 1; index_i <= num; index_i++) {
    let row = '';
    for (let index_j = 1; index_j <= index_i * 2; index_j++) {
      row += '* ';
    }
    console.log(row);
  }
}

solve(5);

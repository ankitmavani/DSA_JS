// ==========================================
// Problem: Square pattern
// Category: star_patterns
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  for (let index_i = 0; index_i < num; index_i++) {
    let row = '';
    for (let index_j = 0; index_j < num; index_j++) {
      row += '* ';
    }
    console.log(row);
  }
}

solve(5);

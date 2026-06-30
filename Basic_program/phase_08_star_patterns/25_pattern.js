// ==========================================
// Problem: Pattern
// Category: phase_08_star_patterns
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  for (let index_i = num; index_i >= 1; index_i--) {
    let row = '';
    for (let index_k = index_i - 1; index_k >= 1; index_k--) {
      row += ' ';
    }
    for (let index_j = num; index_j >= index_i; index_j--) {
      row += `${index_j}`;
    }
    for (let index_l = index_i + 1; index_l <= num; index_l++) {
      row += `${index_l}`;
    }
    console.log(row);
  }
}

solve(5);

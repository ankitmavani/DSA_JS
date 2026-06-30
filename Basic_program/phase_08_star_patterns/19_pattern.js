// ==========================================
// Problem: Pattern
// Category: phase_08_star_patterns
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  let index = 65;
  for (let index_i = 1; index_i <= num; index_i++) {
    let row = '';
    for (let index_k = 1; index_k <= num - index_i; index_k++) {
      row += ' ';
    }
    for (let index_j = 1; index_j <= index_i; index_j++) {
      row += `${String.fromCharCode(index)}`;
      index++;
    }
    for (let index_l = 1; index_l < index_i; index_l++) {
      row += `${String.fromCharCode(index)}`;
      index++;
    }
    console.log(row);
  }
}

solve(5);

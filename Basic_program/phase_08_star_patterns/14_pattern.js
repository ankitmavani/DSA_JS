// ==========================================
// Problem: Pattern
// Category: phase_08_star_patterns
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  let index = 1;
  for (let index_i = 1; index_i <= num; index_i++) {
    let row = '';
    for (let index_j = 1; index_j <= index_i; index_j++) {
      row += `${index} `;
      index++;
      if (index >= 10) {
        index = 0;
      }
    }
    console.log(row);
  }
}

solve(7);

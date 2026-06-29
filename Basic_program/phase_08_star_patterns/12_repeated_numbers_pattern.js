// ==========================================
// Problem: Repeated numbers pattern
// Category: star_patterns
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  for (let index_i = 1; index_i <= num; index_i++) {
    let row = '';
    for (let index_j = 1; index_j <= index_i; index_j++) {
      row += `${index_i} `;
    }
    console.log(row);
  }
}

solve(5);

// ==========================================
// Problem: n stars in a line
// Category: star_patterns
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  let row = '';
  for (let index = 0; index < num; index++) {
    row += '* ';
  }
  console.log(row);
}

solve(10);

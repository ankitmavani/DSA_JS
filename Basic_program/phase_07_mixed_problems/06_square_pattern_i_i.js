// ==========================================
// Problem: Square pattern i*i
// Category: mixed_problems
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  for (let index = 1; index <= num; index++) {
    let row = '';
    for (let index_i = 1; index_i <= index; index_i++) {
      row += index * index + ' ';
    }
    console.log(row);
  }
}

solve(5);

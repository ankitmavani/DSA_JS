// ==========================================
// Problem: Cube of numbers from 1 to n
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  let index = 1;
  let series = '';
  while (index <= num) {
    series += index * index * index + ' ';
    index++;
  }
  console.log(series);
}

solve(10);

// ==========================================
// Problem: Sum of first n natural numbers
// Category: mathematical_series
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  let sum = 0;
  // TODO: implement
  for (let index = 0; index <= num; index++) {
    sum += index;
  }
  console.log(sum);
}

solve(10);

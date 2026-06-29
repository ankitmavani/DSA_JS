// ==========================================
// Problem: Sum of first n even numbers
// Category: mathematical_series
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  let sum = 0;
  // TODO: implement
  for (let index = 0; index <= num; index++) {
    if (index % 2 === 0) {
      sum += index;
    }
  }
  console.log(sum);
}

solve(10);

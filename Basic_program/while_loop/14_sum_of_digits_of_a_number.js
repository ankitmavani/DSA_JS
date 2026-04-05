// ==========================================
// Problem: Sum of digits of a number
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let sum_number = 0;
  while (n) {
    sum_number += n % 10;
    n = parseInt(n / 10);
  }
  console.log(sum_number);
}

solve(123456789);

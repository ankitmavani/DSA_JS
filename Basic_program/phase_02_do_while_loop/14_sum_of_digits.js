// ==========================================
// Problem: Sum of digits
// Category: do_while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let sum = 0;
  while (n) {
    sum += parseInt(n % 10);
    n = parseInt(n / 10);
  }
  console.log(sum);
}

solve(123456789);

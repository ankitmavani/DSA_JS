// ==========================================
// Problem: Sum of even and odd digits separately
// Category: do_while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let sum_even = 0;
  let sum_odd = 0;
  while (n) {
    let digit = parseInt(n % 10);
    if (digit % 2 === 0) {
      sum_even += digit;
    } else {
      sum_odd += digit;
    }
    n = parseInt(n / 10);
  }
  console.log(sum_even, sum_odd);
}

solve(46824);

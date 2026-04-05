// ==========================================
// Problem: Sum of odd numbers up to n
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let sum = 0;
  let index = 1;
  while (index <= n) {
    if (index % 2 !== 0) sum += index;
    index++;
  }
  console.log(sum);
}

solve(9);

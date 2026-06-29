// ==========================================
// Problem: Sum of even numbers
// Category: for_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let sum = 0;
  for (let index = 0; index <= n; index++) {
    if (index % 2 === 0) {
      sum += index;
    }
  }
  console.log(sum);
}

solve(10);

// ==========================================
// Problem: Sum of first n natural numbers
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let sum = 0
  let index = 1
  while(index<=n){
    sum+=index
    index++
  }
  console.log(sum)
}

solve(9);

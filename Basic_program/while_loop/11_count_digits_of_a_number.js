// ==========================================
// Problem: Count digits of a number
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let count = 0
  while(n){
    count++
    n=parseInt(n/10)
  }
  console.log(count)
}

solve(123123);

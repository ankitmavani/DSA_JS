// ==========================================
// Problem: Factorial of a number
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let index = 1
  let facto = 1
  while(index<=n){
    facto *= index
    index++
  }
  console.log(facto)
}

solve(5);

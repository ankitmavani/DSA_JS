// ==========================================
// Problem: Reverse a number
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let reverse_number = 0
  while(n){
    reverse_number=reverse_number*10+(n%10)
    n=parseInt(n/10)
  }
  console.log(reverse_number)
}

solve(453453);

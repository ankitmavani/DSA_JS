// ==========================================
// Problem: Factorial
// Category: for_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let facto = 1;
  for (let index = 1; index <= n; index++) {
    facto *= index;
  }
  console.log(facto);
}

solve(6);

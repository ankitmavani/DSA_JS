// =======================================================
// Problem    : Find the nth Fibonacci number recursively
// Phase      : Phase_03_Recursion
// Level      : Level_01_Foundation_Of_Recursion
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num) {
  // Write your solution here
  if (num === 0) return 0;
  if (num === 1) return 1;
  return solve(num - 1) + solve(num - 2);
}

console.log(solve(9));

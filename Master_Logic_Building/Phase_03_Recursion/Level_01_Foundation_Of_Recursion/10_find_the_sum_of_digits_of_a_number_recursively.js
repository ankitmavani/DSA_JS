// =======================================================
// Problem    : Find the sum of digits of a number recursively
// Phase      : Phase_03_Recursion
// Level      : Level_01_Foundation_Of_Recursion
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num) {
  // Write your solution here
  if (!num) return 0;
  return (num % 10) + solve(parseInt(num / 10));
}

console.log(solve(123456789));

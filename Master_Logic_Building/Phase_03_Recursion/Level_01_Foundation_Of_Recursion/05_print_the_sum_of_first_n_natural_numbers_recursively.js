// =======================================================
// Problem    : Print the sum of first n natural numbers recursively
// Phase      : Phase_03_Recursion
// Level      : Level_01_Foundation_Of_Recursion
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num) {
  // Write your solution here
  if (num === 0) return num;
  return num + solve(num - 1);
}

console.log(solve(10));

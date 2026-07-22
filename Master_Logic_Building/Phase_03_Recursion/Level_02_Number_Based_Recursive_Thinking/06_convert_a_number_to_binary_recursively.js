// =======================================================
// Problem    : Convert a number to binary recursively
// Phase      : Phase_03_Recursion
// Level      : Level_02_Number_Based_Recursive_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num) {
  // Write your solution here
  if (num === 0) return '';
  return solve(parseInt(num / 2)) + (num % 2);
}

console.log(solve(42));

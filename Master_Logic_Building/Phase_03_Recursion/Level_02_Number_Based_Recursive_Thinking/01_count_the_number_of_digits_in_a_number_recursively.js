// =======================================================
// Problem    : Count the number of digits in a number recursively
// Phase      : Phase_03_Recursion
// Level      : Level_02_Number_Based_Recursive_Thinking
// Difficulty : Easy
// Status     : ❌ Not Solved
// =======================================================

function solve(num) {
  // Write your solution here
  if (!num) return 0;
  return 1 + solve(parseInt(num / 10));
}

console.log(solve(1234567));

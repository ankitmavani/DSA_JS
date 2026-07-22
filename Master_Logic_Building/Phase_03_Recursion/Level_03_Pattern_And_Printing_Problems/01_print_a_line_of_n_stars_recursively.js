// =======================================================
// Problem    : Print a line of n stars recursively
// Phase      : Phase_03_Recursion
// Level      : Level_03_Pattern_And_Printing_Problems
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(n, str = '') {
  // Write your solution here
  if (n === 0) return str;
  str += '*';
  return solve(n - 1, str);
}

console.log(solve(5));

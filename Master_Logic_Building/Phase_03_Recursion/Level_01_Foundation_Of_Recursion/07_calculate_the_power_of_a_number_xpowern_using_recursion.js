// =======================================================
// Problem    : Calculate the power of a number (x^n) using recursion
// Phase      : Phase_03_Recursion
// Level      : Level_01_Foundation_Of_Recursion
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num, pow) {
  // Write your solution here
  if (pow === 1) return num;
  return num * solve(num, pow - 1);
}

console.log(solve(2, 6));

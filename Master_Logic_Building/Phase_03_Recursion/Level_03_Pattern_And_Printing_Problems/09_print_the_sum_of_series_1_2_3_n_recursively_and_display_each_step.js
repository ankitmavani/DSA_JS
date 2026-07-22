// =======================================================
// Problem    : Print the sum of series 1 + 2 + 3 + ... + n recursively and display each step
// Phase      : Phase_03_Recursion
// Level      : Level_03_Pattern_And_Printing_Problems
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num, index = 1, sum = 0) {
  // Write your solution here
  if (index > num) return;
  console.log(`${sum} + ${index} = ${sum + index}`);
  solve(num, index + 1, sum + index);
}

solve(5);

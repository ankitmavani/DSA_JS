// =======================================================
// Problem    : Print multiplication table of n recursively
// Phase      : Phase_03_Recursion
// Level      : Level_03_Pattern_And_Printing_Problems
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num, index = 1) {
  // Write your solution here
  if (index > 10) {
    return;
  }
  console.log(`${num} * ${index} = ${index * num}`);
  solve(num, index + 1);
}

solve(5);

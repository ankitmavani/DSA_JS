// =======================================================
// Problem    : Print numbers in increasing and decreasing order in the same recursive function
// Phase      : Phase_03_Recursion
// Level      : Level_03_Pattern_And_Printing_Problems
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num, index = 1) {
  // Write your solution here
  if (index === num) {
    console.log(index);
    return;
  }
  console.log(index);
  solve(num, index + 1);
  console.log(index);
}

solve(5);

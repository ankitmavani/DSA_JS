// =======================================================
// Problem    : Print character pattern (A, AB, ABC, ...) recursively
// Phase      : Phase_03_Recursion
// Level      : Level_03_Pattern_And_Printing_Problems
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num, row = 0, col = 0, str = '') {
  // Write your solution here
  if (row === num) {
    console.log(str);
    return;
  }
  if (col > row) {
    return solve(num, row + 1, 0, row + 1 === num ? str : str + '\n');
  }
  return solve(num, row, col + 1, str + String.fromCharCode(col + 65));
}

solve(5);

// =======================================================
// Problem    : Print a triangle of stars recursively (bottom-up)
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
  if (col >= num - row) {
    return solve(num, row + 1, 0, row === num - 1 ? str : str + '\n');
  }
  return solve(num, row, col + 1, str + '*');
}

solve(5);

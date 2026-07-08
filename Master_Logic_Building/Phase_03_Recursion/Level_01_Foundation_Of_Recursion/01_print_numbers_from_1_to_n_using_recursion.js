// =======================================================
// Problem    : Print numbers from 1 to n using recursion
// Phase      : Phase_03_Recursion
// Level      : Level_01_Foundation_Of_Recursion
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num) {
  // Write your solution here
  if (num === 0) return;
  solve(num - 1);
  console.log(num);
}

solve(10);

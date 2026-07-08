// =======================================================
// Problem    : Print numbers from n down to 1 using recursion
// Phase      : Phase_03_Recursion
// Level      : Level_01_Foundation_Of_Recursion
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num) {
  // Write your solution here
  if (num === 0) return;
  console.log(num);
  solve(num - 1);
}

solve(10);

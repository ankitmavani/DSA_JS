// =======================================================
// Problem    : Print only odd numbers from 1 to n recursively
// Phase      : Phase_03_Recursion
// Level      : Level_01_Foundation_Of_Recursion
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num) {
  // Write your solution here
  if (num === 0) return;
  solve(num - 1);
  if (num % 2 !== 0) console.log(num);
}

solve(10);

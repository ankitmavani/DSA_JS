// =======================================================
// Problem    : Print Fibonacci series up to n terms recursively
// Phase      : Phase_03_Recursion
// Level      : Level_01_Foundation_Of_Recursion
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num) {
  // Write your solution here
  if (num < 2) return num;
  else return solve(num - 1) + solve(num - 2);
}

function FibonacciSeries(num) {
  for (let index = 0; index < num; index++) {
    console.log(solve(index));
  }
}

FibonacciSeries(20);

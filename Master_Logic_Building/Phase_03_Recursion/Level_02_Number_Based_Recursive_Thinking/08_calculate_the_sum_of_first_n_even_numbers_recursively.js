// =======================================================
// Problem    : Calculate the sum of first n even numbers recursively
// Phase      : Phase_03_Recursion
// Level      : Level_02_Number_Based_Recursive_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num, index = 2, count = 0) {
  // Write your solution here
  if (num === count) return 0;
  return index + solve(num, index + 2, count + 1);
}

console.log(solve(4));
console.log(solve(6));
console.log(solve(2));
console.log(solve(1));
console.log(solve(10));

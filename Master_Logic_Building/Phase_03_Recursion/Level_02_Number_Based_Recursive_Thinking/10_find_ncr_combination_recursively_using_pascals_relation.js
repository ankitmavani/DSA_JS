// =======================================================
// Problem    : Find nCr (Combination) recursively using Pascal's relation
// Phase      : Phase_03_Recursion
// Level      : Level_02_Number_Based_Recursive_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(n, r) {
  // Write your solution here
  if (r === 0 || n === r) return 1;
  return solve(n - 1, r - 1) + solve(n - 1, r);
}

console.log(solve(5, 2));
console.log(solve(6, 3));
console.log(solve(7, 1));
console.log(solve(8, 4));
console.log(solve(5, 2));

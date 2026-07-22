// =======================================================
// Problem    : Check if a number is a palindrome using recursion
// Phase      : Phase_03_Recursion
// Level      : Level_02_Number_Based_Recursive_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num, original = num, rev = 0) {
  // Write your solution here
  if (!num) return original === rev;
  return solve(parseInt(num / 10), original, rev * 10 + (num % 10));
}

console.log(solve(123));
console.log(solve(45345));
console.log(solve(12321));
console.log(solve(14841));

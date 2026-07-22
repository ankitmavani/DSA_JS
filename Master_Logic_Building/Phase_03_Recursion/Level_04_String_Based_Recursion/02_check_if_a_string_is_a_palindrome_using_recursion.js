// =======================================================
// Problem    : Check if a string is a palindrome using recursion
// Phase      : Phase_03_Recursion
// Level      : Level_04_String_Based_Recursion
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str, index = str.length - 1, rev_str = '') {
  // Write your solution here
  if (index < 0) return rev_str === str;
  rev_str += str[index];
  return solve(str, index - 1, rev_str);
}

console.log(solve('hello'));
console.log(solve('madam'));

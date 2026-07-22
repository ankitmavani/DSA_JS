// =======================================================
// Problem    : Reverse a string using recursion
// Phase      : Phase_03_Recursion
// Level      : Level_04_String_Based_Recursion
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str, index = str.length - 1) {
  // Write your solution here
  if (index < 0) return '';
  return str[index] + solve(str, index - 1);
}

console.log(solve('hello'));

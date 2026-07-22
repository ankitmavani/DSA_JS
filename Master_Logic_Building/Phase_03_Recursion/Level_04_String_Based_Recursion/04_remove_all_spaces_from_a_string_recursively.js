// =======================================================
// Problem    : Remove all spaces from a string recursively
// Phase      : Phase_03_Recursion
// Level      : Level_04_String_Based_Recursion
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str, index = 0) {
  // Write your solution here
  if (str.length === index) return '';
  // console.log(str.)

  return (str[index] === ' ' ? '' : str[index]) + solve(str, index + 1);
}

console.log(solve('hello world'));

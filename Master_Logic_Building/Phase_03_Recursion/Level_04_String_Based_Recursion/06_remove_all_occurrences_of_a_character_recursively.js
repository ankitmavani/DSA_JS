// =======================================================
// Problem    : Remove all occurrences of a character recursively
// Phase      : Phase_03_Recursion
// Level      : Level_04_String_Based_Recursion
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str, index = 0) {
  // Write your solution here
  if (str.length === index) return '';
  return (str[index] === 'a' ? '' : str[index]) + solve(str, index + 1);
}

console.log(solve('banana'));

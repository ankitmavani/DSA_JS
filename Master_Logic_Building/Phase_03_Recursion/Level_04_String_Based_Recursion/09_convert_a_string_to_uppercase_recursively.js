// =======================================================
// Problem    : Convert a string to uppercase recursively
// Phase      : Phase_03_Recursion
// Level      : Level_04_String_Based_Recursion
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str, index = 0) {
  // Write your solution here
  if (index === str.length) return '';
  let char =
    str[index] > 'a' && str[index] < 'z'
      ? String.fromCharCode(str.charCodeAt(index) - 32)
      : str[index];
  return char + solve(str, index + 1);
}

console.log(solve('hello world'));

// =======================================================
// Problem    : Count vowels in a string recursively
// Phase      : Phase_03_Recursion
// Level      : Level_04_String_Based_Recursion
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str, index = 0) {
  // Write your solution here
  if (str.length === index) return 0;

  let vowels = 'aeiouAEIOU';
  let count = vowels.includes(str[index]) ? 1 : 0;

  return count + solve(str, index + 1);
}

console.log(solve('education'));

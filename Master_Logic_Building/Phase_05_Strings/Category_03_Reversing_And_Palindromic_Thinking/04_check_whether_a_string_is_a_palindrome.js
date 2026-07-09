// =======================================================
// Problem    : Check whether a string is a palindrome
// Phase      : Phase_05_Strings
// Level      : Category_03_Reversing_And_Palindromic_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let temp = str;
  console.log(temp.split('').reverse().join('') === temp);
}

solve('abcba');
solve('Asdfasdfas');
solve('ab ba');

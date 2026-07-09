// =======================================================
// Problem    : Print the second half of the string in reverse
// Phase      : Phase_05_Strings
// Level      : Category_03_Reversing_And_Palindromic_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let len = str.length;
  let mid = Math.floor(len / 2);
  console.log(str.slice(mid).split('').reverse().join(''));
}

solve('hello');

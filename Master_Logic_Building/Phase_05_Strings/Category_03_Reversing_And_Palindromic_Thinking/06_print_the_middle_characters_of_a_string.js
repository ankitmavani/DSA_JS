// =======================================================
// Problem    : Print the middle character(s) of a string
// Phase      : Phase_05_Strings
// Level      : Category_03_Reversing_And_Palindromic_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let len = str.length;
  if (len % 2 === 0) {
    console.log(str[parseInt(len / 2) - 1] + str[parseInt(len / 2)]);
  } else {
    console.log(str[parseInt(len / 2)]);
  }
}

solve('helsflo');
solve('abcd');

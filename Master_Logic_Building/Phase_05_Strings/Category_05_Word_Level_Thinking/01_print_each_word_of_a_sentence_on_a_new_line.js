// =======================================================
// Problem    : Print each word of a sentence on a new line
// Phase      : Phase_05_Strings
// Level      : Category_05_Word_Level_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  str.split(' ').map((str) => console.log(str));
}

solve('hello world sample');

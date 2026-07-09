// =======================================================
// Problem    : Count how many words have even length
// Phase      : Phase_05_Strings
// Level      : Category_05_Word_Level_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  str
    .split(' ')
    .filter((str) => str.length % 2 === 0)
    .map((str) => console.log(str));
}

solve('hello world sample data');

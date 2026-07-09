// =======================================================
// Problem    : Convert the sentence to title case
// Phase      : Phase_05_Strings
// Level      : Category_05_Word_Level_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let result = '';
  let newWord = true;
  for (let index = 0; index < str.length; index++) {
    if (str[index] === ' ') {
      result += str[index];
      newWord = true;
    } else if (newWord) {
      result += str[index].toUpperCase();
      newWord = false;
    } else {
      result += str[index];
    }
  }
  console.log(result);
}

solve('Hello world sample');

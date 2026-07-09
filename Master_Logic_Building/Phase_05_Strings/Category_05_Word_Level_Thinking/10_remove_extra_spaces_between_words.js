// =======================================================
// Problem    : Remove extra spaces between words
// Phase      : Phase_05_Strings
// Level      : Category_05_Word_Level_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let result = '';
  let space = false;
  for (let index = 0; index < str.length; index++) {
    if (str[index] === ' ' && !space) {
      result += ' ';
      space = true;
    } else if (str[index] !== ' ') {
      result += str[index];
      space = false;
    }
  }
  console.log(result);
}

solve('hello   world sample      data');

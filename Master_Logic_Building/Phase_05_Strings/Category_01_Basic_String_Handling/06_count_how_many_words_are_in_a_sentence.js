// =======================================================
// Problem    : Count how many words are in a sentence
// Phase      : Phase_05_Strings
// Level      : Category_01_Basic_String_Handling
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let count = 0;
  let isWord = false;
  for (let index = 0; index < str.length; index++) {
    if (str[index] === ' ' && isWord) {
      count++;
      isWord = false;
    } else if (str[index] !== ' ') {
      isWord = true;
    }
  }
  if (isWord) {
    count++;
  }
  console.log(count);
}

solve('I am here for testing   ');

// =======================================================
// Problem    : Count how many substrings start and end with the same character
// Phase      : Phase_05_Strings
// Level      : Category_02_Counting_And_Character_Analysis
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let count = 0;
  for (let index = 0; index < str.length; index++) {
    for (let index_i = index; index_i < str.length; index_i++) {
      if (str[index] === str[index_i]) {
        count++;
      }
    }
  }
  console.log(count);
}

solve('abcab');
solve('aaa');

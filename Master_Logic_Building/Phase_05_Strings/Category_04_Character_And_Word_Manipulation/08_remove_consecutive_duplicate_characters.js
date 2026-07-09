// =======================================================
// Problem    : Remove consecutive duplicate characters
// Phase      : Phase_05_Strings
// Level      : Category_04_Character_And_Word_Manipulation
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let previous_char;
  let result = '';
  for (let index = 0; index < str.length; index++) {
    if (str[index] !== previous_char) {
      result += str[index];
      previous_char = str[index];
    } else {
      previous_char = str[index];
    }
  }
  console.log(result);
}

solve('aaabbcc');
solve('abaaccddcdd');

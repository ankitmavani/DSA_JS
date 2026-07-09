// =======================================================
// Problem    : Replace all spaces with '_'
// Phase      : Phase_05_Strings
// Level      : Category_04_Character_And_Word_Manipulation
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let result = '';
  for (let index = 0; index < str.length; index++) {
    if (str[index] !== ' ') {
      result += str[index];
    } else {
      result += '_';
    }
  }
  console.log(result);
}

solve('this is sample message');

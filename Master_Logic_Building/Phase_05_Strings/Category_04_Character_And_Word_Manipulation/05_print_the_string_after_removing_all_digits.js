// =======================================================
// Problem    : Print the string after removing all digits
// Phase      : Phase_05_Strings
// Level      : Category_04_Character_And_Word_Manipulation
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  let result = '';
  // Write your solution here
  for (let index = 0; index < str.length; index++) {
    if (str[index] >= '0' && str[index] <= '9') {
      continue;
    } else {
      result += str[index];
    }
  }
  console.log(result);
}

solve('hello 123 world');

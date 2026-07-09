// =======================================================
// Problem    : Shift each character by one position
// Phase      : Phase_05_Strings
// Level      : Category_04_Character_And_Word_Manipulation
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let result = '';
  for (let index = 0; index < str.length; index++) {
    let code = str.charCodeAt(index);
    if (code >= 97 && code <= 122) {
      if (code === 122) {
        result += 'a';
      } else {
        result += String.fromCharCode(code + 1);
      }
    }
  }
  console.log(result);
}

solve('abc');
solve('xyz');

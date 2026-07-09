// =======================================================
// Problem    : Convert all characters of a string to uppercase
// Phase      : Phase_05_Strings
// Level      : Category_01_Basic_String_Handling
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let result = '';
  for (let index = 0; index < str.length; index++) {
    let code = str.charCodeAt(index);
    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += String.fromCharCode(code);
    }
  }
  console.log(result);
}

solve('hello World!');

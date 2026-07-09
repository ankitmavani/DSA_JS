// =======================================================
// Problem    : Convert all characters of a string to lowercase
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
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += String.fromCharCode(code);
    }
  }
  console.log(result);
}

solve('HELLO WORLD! hii');

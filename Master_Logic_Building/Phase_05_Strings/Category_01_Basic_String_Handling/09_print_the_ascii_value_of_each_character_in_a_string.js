// =======================================================
// Problem    : Print the ASCII value of each character in a string
// Phase      : Phase_05_Strings
// Level      : Category_01_Basic_String_Handling
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let result = [];
  for (let index = 0; index < str.length; index++) {
    result.push(str.charCodeAt(index));
  }
  console.log(result);
}

solve('hello WORLD!');

// =======================================================
// Problem    : Count how many characters (excluding spaces) are in the string
// Phase      : Phase_05_Strings
// Level      : Category_01_Basic_String_Handling
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let count = 0;
  for (let index = 0; index < str.length; index++) {
    if (str[index] !== ' ') {
      count++;
    }
  }
  console.log(count);
}

solve('Hello world');
solve('COUNT');

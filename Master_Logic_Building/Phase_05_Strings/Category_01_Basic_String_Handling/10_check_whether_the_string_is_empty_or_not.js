// =======================================================
// Problem    : Check whether the string is empty or not
// Phase      : Phase_05_Strings
// Level      : Category_01_Basic_String_Handling
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  if (str.trim() === '') {
    console.log('empty');
  } else {
    console.log('not empty');
  }
}

solve('sdfa');
solve('');

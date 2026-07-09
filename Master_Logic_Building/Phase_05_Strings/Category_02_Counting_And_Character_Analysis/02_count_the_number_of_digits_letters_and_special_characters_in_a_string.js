// =======================================================
// Problem    : Count the number of digits, letters, and special characters in a string
// Phase      : Phase_05_Strings
// Level      : Category_02_Counting_And_Character_Analysis
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here

  let letters = 0;
  let digits = 0;
  let special = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch === ' ') {
      continue;
    }
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
      letters++;
    } else if (ch >= '0' && ch <= '9') {
      digits++;
    } else {
      special++;
    }
  }
  console.log(letters, digits, special);
}

solve('hello world123!');

// =======================================================
// Problem    : Remove duplicate characters from a string
// Phase      : Phase_05_Strings
// Level      : Category_04_Character_And_Word_Manipulation
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let freq = new Array(255).fill(0);
  let result = '';
  for (let index = 0; index < str.length; index++) {
    if (freq[str.charCodeAt(index)] !== 0) {
      freq[str.charCodeAt(index)] = freq[str.charCodeAt(index)] + 1;
    } else {
      result += str[index];
      freq[str.charCodeAt(index)] = freq[str.charCodeAt(index)] + 1;
    }
  }
  console.log(result);
}

solve('hello world');

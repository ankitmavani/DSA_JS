// =======================================================
// Problem    : Replace all vowels with '*'
// Phase      : Phase_05_Strings
// Level      : Category_04_Character_And_Word_Manipulation
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let result = '';

  for (let ch of str) {
    if (
      ch === 'a' ||
      ch === 'e' ||
      ch === 'i' ||
      ch === 'o' ||
      ch === 'u' ||
      ch === 'A' ||
      ch === 'E' ||
      ch === 'I' ||
      ch === 'O' ||
      ch === 'U'
    ) {
      result += '*';
    } else {
      result += ch;
    }
  }

  console.log(result);
}

solve('hello world');

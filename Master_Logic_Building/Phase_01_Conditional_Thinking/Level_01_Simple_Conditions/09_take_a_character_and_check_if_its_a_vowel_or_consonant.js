// =======================================================
// Problem    : Take a character and check if it's a vowel or consonant
// Phase      : Phase_01_Conditional_Thinking
// Level      : Level_01_Simple_Conditions
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(char) {
  // Write your solution here
  if (
    char === 'A' ||
    char === 'O' ||
    char === 'E' ||
    char === 'I' ||
    char === 'U'
  ) {
    console.log('VOWEL');
  } else {
    console.log('Not Vowel');
  }
}

solve('A');
solve('O');
solve('F');
solve('B');
solve('E');

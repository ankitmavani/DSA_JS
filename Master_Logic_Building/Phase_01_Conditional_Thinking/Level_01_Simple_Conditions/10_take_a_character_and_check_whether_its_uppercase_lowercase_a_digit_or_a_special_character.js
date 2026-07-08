// =======================================================
// Problem    : Take a character and check whether it's uppercase, lowercase, a digit, or a special character
// Phase      : Phase_01_Conditional_Thinking
// Level      : Level_01_Simple_Conditions
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(char) {
  // Write your solution here
  if (typeof char !== 'string' || char.length !== 1) {
    console.log('single valid char');
  } else if (char >= 'A' && char <= 'Z') {
    console.log('Uppercase');
  } else if (char >= 'a' && char <= 'z') {
    console.log('lowercase');
  } else if (char >= '0' && char <= '9') {
    console.log('number');
  } else {
    console.log(' special char');
  }
}

solve('1');
solve('D');
solve('g');
solve('9');
solve('*');

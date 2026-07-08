// =======================================================
// Problem    : Check if a number is even or odd
// Phase      : Phase_01_Conditional_Thinking
// Level      : Level_01_Simple_Conditions
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num) {
  // Write your solution here
  if (num % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}

solve(12);
solve(28);
solve(17);

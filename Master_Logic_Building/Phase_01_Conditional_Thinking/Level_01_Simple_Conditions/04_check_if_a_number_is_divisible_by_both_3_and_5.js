// =======================================================
// Problem    : Check if a number is divisible by both 3 and 5
// Phase      : Phase_01_Conditional_Thinking
// Level      : Level_01_Simple_Conditions
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num) {
  // Write your solution here
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('Divided');
  } else {
    console.log('Not Divided');
  }
}

solve(15);
solve(5);
solve(12);

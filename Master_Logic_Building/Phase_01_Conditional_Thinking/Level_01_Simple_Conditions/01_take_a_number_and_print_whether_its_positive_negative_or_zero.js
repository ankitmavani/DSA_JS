// =======================================================
// Problem    : Take a number and print whether it's positive, negative, or zero
// Phase      : Phase_01_Conditional_Thinking
// Level      : Level_01_Simple_Conditions
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num) {
  // Write your solution here
  if (num > 0) {
    console.log('Positive');
  } else if (num < 0) {
    console.log('Negative');
  } else {
    console.log('Zero');
  }
}

solve(12);
solve(0);
solve(-12);

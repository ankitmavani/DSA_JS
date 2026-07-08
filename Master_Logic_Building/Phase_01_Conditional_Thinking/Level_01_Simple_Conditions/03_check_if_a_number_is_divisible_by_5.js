// =======================================================
// Problem    : Check if a number is divisible by 5
// Phase      : Phase_01_Conditional_Thinking
// Level      : Level_01_Simple_Conditions
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num) {
  // Write your solution here
  if (num % 5 === 0) {
    console.log('Divided by 5');
  } else {
    console.log('not divided by 5');
  }
}

solve(15);
solve(1932);
solve(10);
solve(17);

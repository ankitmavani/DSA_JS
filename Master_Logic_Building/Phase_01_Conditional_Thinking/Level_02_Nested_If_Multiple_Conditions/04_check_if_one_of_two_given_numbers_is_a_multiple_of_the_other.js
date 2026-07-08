// =======================================================
// Problem    : Check if one of two given numbers is a multiple of the other
// Phase      : Phase_01_Conditional_Thinking
// Level      : Level_02_Nested_If_Multiple_Conditions
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(a, b) {
  // Write your solution here
  if (a % b === 0 || b % a === 0) {
    console.log('is divided');
  }
}

solve();

// =======================================================
// Problem    : Take a year and print the corresponding century
// Phase      : Phase_01_Conditional_Thinking
// Level      : Level_05_Creative_Tricky_Logical_Scenarios
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(year) {
  // Write your solution here
  return Math.ceil(year / 100);
}

solve(1990);
solve(2033);
solve(2100);
solve(800);
solve(1990);

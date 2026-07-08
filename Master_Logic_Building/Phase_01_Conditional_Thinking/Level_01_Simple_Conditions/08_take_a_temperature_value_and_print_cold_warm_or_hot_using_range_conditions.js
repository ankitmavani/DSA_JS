// =======================================================
// Problem    : Take a temperature value and print Cold, Warm, or Hot using range conditions
// Phase      : Phase_01_Conditional_Thinking
// Level      : Level_01_Simple_Conditions
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(temp) {
  // Write your solution here
  if (temp >= 40) {
    console.log('Hot');
  } else if (temp >= 25 && temp < 40) {
    console.log('warm');
  } else {
    console.log('Cold');
  }
}

solve(100);
solve(34);
solve(17);

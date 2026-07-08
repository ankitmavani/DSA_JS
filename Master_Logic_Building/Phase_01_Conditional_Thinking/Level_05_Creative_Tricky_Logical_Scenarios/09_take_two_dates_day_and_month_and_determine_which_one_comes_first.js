// =======================================================
// Problem    : Take two dates (day and month) and determine which one comes first
// Phase      : Phase_01_Conditional_Thinking
// Level      : Level_05_Creative_Tricky_Logical_Scenarios
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(day1, month1, day2, month2) {
  // Write your solution here
  if (month2 > month1) {
    console.log(month1);
  } else if (month2 < month1) {
    console.log(month2);
  } else {
    if (day2 > day1) {
      console.log(day1);
    } else if (day2 < day1) {
      console.log(day2);
    } else {
      console.log('same');
    }
  }
}

solve();

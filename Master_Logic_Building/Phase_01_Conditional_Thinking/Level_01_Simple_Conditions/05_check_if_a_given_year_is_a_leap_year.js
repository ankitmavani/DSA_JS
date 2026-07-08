// =======================================================
// Problem    : Check if a given year is a leap year
// Phase      : Phase_01_Conditional_Thinking
// Level      : Level_01_Simple_Conditions
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(year) {
  // Write your solution here
  if (year % 400 === 0) {
    console.log('Leap year');
  } else if (year % 100 === 0) {
    console.log('not leap year');
  } else if (year % 4 === 0) {
    console.log('leap year');
  } else {
    console.log('not leap year');
  }
}

solve(1600);
solve(1900);
solve(2012);

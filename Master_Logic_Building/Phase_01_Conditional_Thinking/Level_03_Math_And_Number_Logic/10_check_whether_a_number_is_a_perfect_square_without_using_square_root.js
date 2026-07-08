// =======================================================
// Problem    : Check whether a number is a perfect square (without using square root)
// Phase      : Phase_01_Conditional_Thinking
// Level      : Level_03_Math_And_Number_Logic
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num) {
  // Write your solution here
  let left = 1;
  let right = parseInt(num / 2);
  while (left <= right) {
    mid = parseInt((left + right) / 2);
    let square = mid * mid;
    if (square === num) {
      console.log('perfect square');
      break;
    } else if (square > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  console.log('not perfect square');
}

solve(25);

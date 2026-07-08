// =======================================================
// Problem    : Find the maximum element in an array
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_01_Fundamentals_Of_Arrays
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  let max = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) max = arr[index];
  }
  console.log(max);
}

solve([213, 56, 23, 6, 8, 2343, 556]);

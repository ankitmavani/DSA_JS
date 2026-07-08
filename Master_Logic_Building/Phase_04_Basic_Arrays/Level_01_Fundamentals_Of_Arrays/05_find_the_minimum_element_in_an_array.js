// =======================================================
// Problem    : Find the minimum element in an array
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_01_Fundamentals_Of_Arrays
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  let min = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < min) min = arr[index];
  }
  console.log(min);
}

solve([4, 6, 2, 34, 7, 4432, 2, 3]);

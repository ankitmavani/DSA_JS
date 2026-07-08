// =======================================================
// Problem    : Count how many elements are perfect squares
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_02_Searching_And_Counting_Logic
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] >= 0 && Number.isInteger(Math.sqrt(arr[index]))) {
      console.log(arr[index]);
    }
  }
}

solve([1, 2, 3, 4, 5, 9, 10]);

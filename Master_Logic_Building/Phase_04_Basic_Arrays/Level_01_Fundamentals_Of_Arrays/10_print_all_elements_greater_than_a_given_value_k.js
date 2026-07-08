// =======================================================
// Problem    : Print all elements greater than a given value k
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_01_Fundamentals_Of_Arrays
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr, k) {
  // Write your solution here
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] >= k) console.log(arr[index]);
  }
}

solve([1, 2, 3, 5, 6, 7, 8, 2, 4, 5, 7, 8], 4);

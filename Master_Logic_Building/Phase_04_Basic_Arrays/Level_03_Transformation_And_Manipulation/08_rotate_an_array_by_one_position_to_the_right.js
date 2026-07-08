// =======================================================
// Problem    : Rotate an array by one position to the right
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_03_Transformation_And_Manipulation
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  let temp = arr[arr.length - 1];
  for (let index = arr.length - 1; index > 0; index--) {
    arr[index] = arr[index - 1];
  }
  arr[0] = temp;
  console.log(arr);
}

solve([1, 2, 3, 4, 5, 6]);

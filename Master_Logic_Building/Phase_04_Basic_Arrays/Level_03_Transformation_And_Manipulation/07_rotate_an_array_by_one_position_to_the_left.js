// =======================================================
// Problem    : Rotate an array by one position to the left
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_03_Transformation_And_Manipulation
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  let temp = arr[0];
  for (let index = 0; index < arr.length - 1; index++) {
    arr[index] = arr[index + 1];
  }
  arr[arr.length - 1] = temp;
  console.log(arr);
}

solve([1, 2, 3, 4, 5]);

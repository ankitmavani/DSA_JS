// =======================================================
// Problem    : Find the difference between the largest and smallest elements
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_05_Logical_And_Applied_Array_Problems
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  for (let index = 0; index < arr.length; index++) {
    if (max < arr[index]) {
      max = arr[index];
    }
    if (min > arr[index]) {
      min = arr[index];
    }
  }
  console.log(max - min);
}

solve([2, 3, 4, 5, 5, 1, 2, 4, 3, 90, 34]);

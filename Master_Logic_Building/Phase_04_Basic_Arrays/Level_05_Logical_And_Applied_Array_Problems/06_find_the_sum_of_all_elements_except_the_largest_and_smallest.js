// =======================================================
// Problem    : Find the sum of all elements except the largest and smallest
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_05_Logical_And_Applied_Array_Problems
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    if (max < arr[index]) {
      max = arr[index];
    }
    if (min > arr[index]) {
      min = arr[index];
    }
    sum += arr[index];
  }
  console.log(sum - max - min);
}

solve([5, 6, 8, 4, 2, 4, 1, 9]);

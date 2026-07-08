// =======================================================
// Problem    : Count how many elements are greater than the average of the array
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_05_Logical_And_Applied_Array_Problems
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function averageArray(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum / arr.length;
}

function solve(arr) {
  // Write your solution here
  for (let index = 0; index < arr.length; index++) {
    if (averageArray(arr) < arr[index]) {
      console.log(arr[index]);
    }
  }
}

solve([5, 1, 2, 3, 4, 5, 6, 7, 8]);

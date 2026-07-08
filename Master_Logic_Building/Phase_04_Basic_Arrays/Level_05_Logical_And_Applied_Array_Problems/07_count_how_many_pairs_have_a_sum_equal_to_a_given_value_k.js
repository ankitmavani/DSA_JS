// =======================================================
// Problem    : Count how many pairs have a sum equal to a given value k
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_05_Logical_And_Applied_Array_Problems
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr, k) {
  // Write your solution here
  for (let index = 0; index < arr.length; index++) {
    for (let index_j = index + 1; index_j < arr.length; index_j++) {
      if (arr[index] + arr[index_j] === k) {
        console.log(arr[index], arr[index_j]);
      }
    }
  }
}

solve([1, 5, 7, -1, 5], 6);

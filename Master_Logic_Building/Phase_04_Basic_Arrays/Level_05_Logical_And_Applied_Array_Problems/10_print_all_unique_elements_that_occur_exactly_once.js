// =======================================================
// Problem    : Print all unique elements that occur exactly once
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_05_Logical_And_Applied_Array_Problems
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  for (let index = 0; index < arr.length; index++) {
    let unique = true;
    for (let index_j = 0; index_j < arr.length; index_j++) {
      if (arr[index] === arr[index_j] && index !== index_j) {
        unique = false;
        break;
      }
    }
    if (unique) {
      console.log(arr[index]);
    }
  }
}

solve([1, 2, 3, 5, 6, 3, 4, 5, 2]);

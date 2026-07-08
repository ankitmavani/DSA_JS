// =======================================================
// Problem    : Check whether an array is sorted in ascending order
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_05_Logical_And_Applied_Array_Problems
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  let sorted = true;
  for (let index = 0; index < arr.length - 1; index++) {
    if (arr[index] > arr[index + 1]) {
      sorted = false;
      break;
    }
  }
  console.log(sorted);
}

solve([1, 2, 3, 4, 5]);
solve([1, 2, 3, 4, 5, 2]);

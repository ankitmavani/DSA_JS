// =======================================================
// Problem    : Check whether an array is sorted in descending order
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_05_Logical_And_Applied_Array_Problems
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  let sorted = true;
  for (let index = 0; index < arr.length - 1; index++) {
    if (arr[index] < arr[index + 1]) {
      sorted = false;
      break;
    }
  }
  console.log(sorted);
}

solve([5, 4, 3, 2, 1]);
solve([7, 6, 4, 2, 1, 2]);
solve([66, 54, 33, 22, 11]);

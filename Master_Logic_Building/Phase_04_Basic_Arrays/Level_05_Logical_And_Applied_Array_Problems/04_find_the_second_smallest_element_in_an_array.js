// =======================================================
// Problem    : Find the second smallest element in an array
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_05_Logical_And_Applied_Array_Problems
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  let minimum = Number.POSITIVE_INFINITY;
  let second = Number.POSITIVE_INFINITY;
  for (let index = 0; index < arr.length; index++) {
    if (minimum > arr[index]) {
      second = minimum;
      minimum = arr[index];
    } else if (arr[index] < second && arr[index] !== minimum) {
      second = arr[index];
    }
  }
  console.log(second);
}

solve([10, 20, 5, 40, 30]);
solve([2, 3, 4, 5, 6]);

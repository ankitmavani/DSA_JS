// =======================================================
// Problem    : Find the second largest element in an array
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_05_Logical_And_Applied_Array_Problems
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let second = -Infinity;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > largest) {
      second = largest;
      largest = arr[index];
    } else if (second < arr[index] && arr[index] !== largest) {
      second = arr[index];
    }
  }
  console.log(second);
}

solve([35, 10, 20, 5, 40, 30, 36]);

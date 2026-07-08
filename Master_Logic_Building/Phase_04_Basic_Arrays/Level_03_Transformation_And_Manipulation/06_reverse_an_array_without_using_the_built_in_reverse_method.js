// =======================================================
// Problem    : Reverse an array without using the built-in reverse method
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_03_Transformation_And_Manipulation
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  console.log(arr);
}

solve([1, 2, 3, 5]);

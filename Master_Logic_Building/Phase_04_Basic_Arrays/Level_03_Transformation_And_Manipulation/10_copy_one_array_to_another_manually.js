// =======================================================
// Problem    : Copy one array to another manually
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_03_Transformation_And_Manipulation
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr, index, new_arr) {
  // Write your solution here
  if (index === arr.length) return new_arr;
  new_arr[index] = arr[index];
  return solve(arr, index + 1, new_arr);
}

console.log(solve([1, 2, 3, 4, 5], 0, []));

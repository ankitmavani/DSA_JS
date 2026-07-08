// =======================================================
// Problem    : Find the element-wise product of two arrays
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_04_Aggregate_And_Comparative_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr1, arr2) {
  // Write your solution here
  let new_arr = [];
  for (let index = 0; index < arr1.length; index++) {
    new_arr.push(arr1[index] * arr2[index]);
  }
  console.log(new_arr);
}

solve([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);

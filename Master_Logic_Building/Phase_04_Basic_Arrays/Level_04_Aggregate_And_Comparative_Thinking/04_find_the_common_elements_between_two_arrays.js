// =======================================================
// Problem    : Find the common elements between two arrays
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_04_Aggregate_And_Comparative_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr1, arr2) {
  // Write your solution here
  let freq = {};
  let common_arr = [];

  for (let index = 0; index < arr1.length; index++) {
    freq[arr1[index]] = (freq[arr1[index]] || 0) + 1;
  }

  for (let index = 0; index < arr2.length; index++) {
    if (freq[arr2[index]] > 0) {
      common_arr.push(arr2[index]);
      freq[arr2[index]]--;
    }
  }
  return common_arr;
}

console.log(solve([1, 2, 2, 3, 4], [23, 43, 12, 21, 5]));

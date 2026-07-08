// =======================================================
// Problem    : Count how many elements are common between two arrays
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_04_Aggregate_And_Comparative_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr1, arr2) {
  // Write your solution here
  let freq = {};
  let common_arr = 0;
  for (let index = 0; index < arr1.length; index++) {
    freq[arr1[index]] = (freq[arr1[index]] || 0) + 1;
  }

  for (let index = 0; index < arr2.length; index++) {
    if (freq[arr2[index]] > 0) {
      common_arr++;
      freq[arr2[index]]--;
    }
  }
  console.log(common_arr);
}

solve([1, 2, 3, 4, 5], [1, 2, 3, 7, 8, 4]);

// =======================================================
// Problem    : Print the frequency of each distinct element
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_05_Logical_And_Applied_Array_Problems
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  let freq = {};
  for (let index = 0; index < arr.length; index++) {
    freq[arr[index]] = (freq[arr[index]] || 0) + 1;
  }
  console.log(freq);
}

solve([2, 3, 2, 5, 3, 2, 7, 5, 5]);

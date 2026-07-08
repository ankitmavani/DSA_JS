// =======================================================
// Problem    : Compare two arrays and check if they contain the same elements regardless of order
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_04_Aggregate_And_Comparative_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr1, arr2) {
  // Write your solution here
  let freq1 = {};
  let freq2 = {};
  if (arr1.length !== arr2.length) return false;

  for (let index = 0; index < arr1.length; index++) {
    freq1[arr1[index]] = (freq1[arr1[index]] || 0) + 1;
  }

  for (let index = 0; index < arr2.length; index++) {
    freq2[arr2[index]] = (freq2[arr2[index]] || 0) + 1;
  }

  for (let key in freq1) {
    if (!(key in freq2)) {
      return false;
    }
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
  // console.log(freq1, freq2)
}

console.log(solve([1, 2, 2, 1, 3, 4, 2, 3, 4], [1, 1, 2, 2, 2, 3, 3, 9, 4, 4]));

// =======================================================
// Problem    : Compare two arrays and check if they are equal (same elements and same order)
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_04_Aggregate_And_Comparative_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr1, arr2) {
  // Write your solution here
  if (arr1.length === arr2.length)
    for (let index = 0; index < arr1.length; index++) {
      if (arr1[index] !== arr2[index]) {
        return false;
      }
    }
  return true;
}

console.log(solve([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));

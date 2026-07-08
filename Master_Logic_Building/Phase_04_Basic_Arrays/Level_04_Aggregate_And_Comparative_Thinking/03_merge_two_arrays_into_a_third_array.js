// =======================================================
// Problem    : Merge two arrays into a third array
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_04_Aggregate_And_Comparative_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr1, arr2) {
  // Write your solution here
  let arr3 = [];
  for (let index = 0; index < arr1.length; index++) {
    arr3.push(arr1[index]);
  }
  for (let index = 0; index < arr2.length; index++) {
    arr3.push(arr2[index]);
  }
  return arr3;
}

console.log(solve([1, 2, 3], [4, 5, 6]));

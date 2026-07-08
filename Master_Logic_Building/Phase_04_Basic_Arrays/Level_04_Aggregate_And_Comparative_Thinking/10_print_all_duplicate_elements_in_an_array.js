// =======================================================
// Problem    : Print all duplicate elements in an array
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_04_Aggregate_And_Comparative_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  let duplicate_ele = [];
  for (let index = 0; index < arr.length; index++) {
    for (let index_j = index + 1; index_j < arr.length; index_j++) {
      if (arr[index] === arr[index_j]) {
        duplicate_ele.push(arr[index]);
      }
    }
  }
  console.log(duplicate_ele);
}

solve([3, 4, 1, 2, 3, 4, 5, 6, 7, 1, 2, 5]);

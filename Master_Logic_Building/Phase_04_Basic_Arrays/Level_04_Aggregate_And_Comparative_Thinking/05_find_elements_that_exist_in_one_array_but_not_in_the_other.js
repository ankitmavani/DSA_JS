// =======================================================
// Problem    : Find elements that exist in one array but not in the other
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_04_Aggregate_And_Comparative_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr1, arr2) {
  // Write your solution here
  let common_arr = [];
  for (let index = 0; index < arr1.length; index++) {
    let check = false;
    for (let index_j = 0; index_j < arr2.length; index_j++) {
      if (arr1[index] === arr2[index_j]) {
        check = true;
        break;
      }
    }
    if (!check) {
      common_arr.push(arr1[index]);
    }
  }
  for (let index = 0; index < arr2.length; index++) {
    let check = false;
    for (let index_j = 0; index_j < arr1.length; index_j++) {
      if (arr2[index] === arr1[index_j]) {
        check = true;
        break;
      }
    }
    if (!check) {
      common_arr.push(arr2[index]);
    }
  }
  console.log(common_arr);
}

solve([1, 4, 5, 7], [1, 4, 2, 3, 8, 5]);

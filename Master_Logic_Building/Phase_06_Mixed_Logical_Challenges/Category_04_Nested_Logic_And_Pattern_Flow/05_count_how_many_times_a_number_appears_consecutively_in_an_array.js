// =======================================================
// Problem    : Count how many times a number appears consecutively in an array
// Phase      : Phase_06_Mixed_Logical_Challenges
// Level      : Category_04_Nested_Logic_And_Pattern_Flow
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  let cur_val = arr[0];
  let count = 1;
  for (let index = 1; index < arr.length; index++) {
    if (cur_val === arr[index]) {
      count++;
    } else {
      console.log(`${cur_val}:== ${count}`);
      cur_val = arr[index];
      count = 1;
    }
  }
  console.log(`${cur_val}:== ${count}`);
}

solve([1, 1, 1, 2, 2, 3, 1, 1, 4]);

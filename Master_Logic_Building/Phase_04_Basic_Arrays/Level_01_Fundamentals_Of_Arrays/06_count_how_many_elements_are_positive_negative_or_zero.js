// =======================================================
// Problem    : Count how many elements are positive, negative, or zero
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_01_Fundamentals_Of_Arrays
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  let positive_num = 0;
  let negative_num = 0;
  let zero_num = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < 0) negative_num++;
    else if (arr[index] > 0) positive_num++;
    else zero_num++;
  }
  console.log(positive_num, negative_num, zero_num);
}

solve([
  9, -1, -2, 0, 23, -12, 34, -12, 4, 5, 1, 4, 6, -23, -34, 0, -4, -5, -3, 0, 0,
]);

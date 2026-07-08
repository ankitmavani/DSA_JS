// =======================================================
// Problem    : Swap alternate elements in the array
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_03_Transformation_And_Manipulation
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  for (
    let index = 0;
    index < arr.length && index + 1 < arr.length;
    index += 2
  ) {
    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
  }
  console.log(arr);
}

solve([1, 2, 3, 4, 5, 6]);

solve([1, 2, 3, 4, 5]);

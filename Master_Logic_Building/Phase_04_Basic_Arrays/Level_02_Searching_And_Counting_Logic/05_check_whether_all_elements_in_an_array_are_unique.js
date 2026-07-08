// =======================================================
// Problem    : Check whether all elements in an array are unique
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_02_Searching_And_Counting_Logic
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  const set = new Set();

  for (let index = 0; index < arr.length; index++) {
    if (set.has(arr[index])) {
      return 'not unique';
      break;
    }
    set.add(arr[index]);
  }
  return 'unique';
  // console.log([...set].length === arr.length)
}

console.log(solve([1, 2, 3, 4, 5, 6, 7, 8, 9]));

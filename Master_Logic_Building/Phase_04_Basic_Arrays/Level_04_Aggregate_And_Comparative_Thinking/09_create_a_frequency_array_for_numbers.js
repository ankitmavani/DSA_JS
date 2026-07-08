// =======================================================
// Problem    : Create a frequency array for numbers
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_04_Aggregate_And_Comparative_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  let max_val = Math.max(...arr);

  let freq_arr = new Array(max_val + 1).fill(0);

  for (let num of arr) {
    freq_arr[num]++;
  }

  console.log(freq_arr);
}

solve([2, 5, 1, 2, 3, 5, 5, 4, 1, 1, 2, 3]);

// =======================================================
// Problem    : Find the frequency of each character in a string without using a map
// Phase      : Phase_05_Strings
// Level      : Category_02_Counting_And_Character_Analysis
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let count_arr = new Array(256).fill(0);
  for (let index = 0; index < str.length; index++) {
    let code = str.charCodeAt(index);
    count_arr[code] = count_arr[code] + 1;
  }
  for (let index = 0; index < count_arr.length; index++) {
    if (count_arr[index] !== 0) {
      console.log(`${String.fromCharCode(index)} count is ${count_arr[index]}`);
    }
  }
}

solve('hello world');

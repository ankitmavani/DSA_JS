// =======================================================
// Problem    : Count how many elements are even and odd
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_01_Fundamentals_Of_Arrays
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  let even_num = 0;
  let odd_num = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) even_num++;
    else odd_num++;
  }
  console.log(even_num, odd_num);
}

solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

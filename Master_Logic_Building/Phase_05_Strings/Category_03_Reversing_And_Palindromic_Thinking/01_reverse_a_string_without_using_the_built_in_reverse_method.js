// =======================================================
// Problem    : Reverse a string without using the built-in reverse method
// Phase      : Phase_05_Strings
// Level      : Category_03_Reversing_And_Palindromic_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(arr) {
  // Write your solution here
  let str = arr.split('');
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    [str[left], str[right]] = [str[right], str[left]];
    left++;
    right--;
  }
  arr = str.join('');
  console.log(arr);
}

solve('hello');

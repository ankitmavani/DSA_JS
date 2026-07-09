// =======================================================
// Problem    : Reverse a string but skip spaces
// Phase      : Phase_05_Strings
// Level      : Category_03_Reversing_And_Palindromic_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let str_arr = str.split('');
  let left = 0;
  let right = str_arr.length - 1;
  while (left < right) {
    while (left < right && str_arr[left] === ' ') {
      left++;
    }
    while (left < right && str_arr[right] === ' ') {
      right--;
    }
    [str_arr[left], str_arr[right]] = [str_arr[right], str_arr[left]];
    left++;
    right--;
  }
  console.log(str_arr.join(''));
}

solve('I Love The Universe');

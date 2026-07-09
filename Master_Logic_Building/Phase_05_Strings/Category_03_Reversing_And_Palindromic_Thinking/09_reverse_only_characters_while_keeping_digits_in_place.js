// =======================================================
// Problem    : Reverse only characters while keeping digits in place
// Phase      : Phase_05_Strings
// Level      : Category_03_Reversing_And_Palindromic_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let arr_str = str.split('');
  let left = 0;
  let right = arr_str.length - 1;
  while (arr_str[left] >= '0' && arr_str[left] <= '9') {
    left++;
  }
  while (arr_str[right] >= '0' && arr_str[right] <= '9') {
    right--;
  }
  console.log(left, right);
  while (left < right) {
    [arr_str[left], arr_str[right]] = [arr_str[right], arr_str[left]];
    left++;
    right--;
    while (arr_str[left] >= '0' && arr_str[left] <= '9') {
      left++;
    }
    while (arr_str[right] >= '0' && arr_str[right] <= '9') {
      right--;
    }
  }
  console.log(arr_str.join(''));
}

solve('x9s9d9');
solve('abcdef');
solve('12345');
solve('ab12cd34ef');

// =======================================================
// Problem    : Reverse each word in a sentence
// Phase      : Phase_05_Strings
// Level      : Category_03_Reversing_And_Palindromic_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function reverseWord(arr) {
  // Write your solution here
  let str = arr.split('');
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    [str[left], str[right]] = [str[right], str[left]];
    left++;
    right--;
  }
  return str.join('');
}

function solve(str) {
  // Write your solution here
  console.log(
    str
      .split(' ')
      .map((str) => reverseWord(str))
      .join(' '),
  );
}

solve('');
solve('Hello World'); // "olleH dlroW"
solve('I love JavaScript'); // "I evol tpircSavaJ"

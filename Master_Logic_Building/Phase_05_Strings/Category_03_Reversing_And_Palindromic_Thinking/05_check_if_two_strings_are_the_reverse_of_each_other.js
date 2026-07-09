// =======================================================
// Problem    : Check if two strings are the reverse of each other
// Phase      : Phase_05_Strings
// Level      : Category_03_Reversing_And_Palindromic_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str1, str2) {
  // Write your solution here
  console.log(str1.split('').reverse().join('') === str2);
}

solve('hello', 'olleh');
solve('hello', 'olleh'); // true
solve('abcd', 'dcba'); // true
solve('racecar', 'racecar'); // true
solve('Java', 'avaJ'); // true
solve('12345', '54321'); // true
solve('a', 'a'); // true
solve('', ''); // true

solve('hello', 'hello'); // false
solve('abc', 'cba '); // false
solve('abc', 'cab'); // false
solve('apple', 'elppa '); // false
solve('abcd', 'abcd'); // false
solve('abc', 'ab'); // false
solve('abc', 'dcba'); // false
solve('Hello', 'olleh'); // false (case-sensitive)
solve('123', '3210'); // false

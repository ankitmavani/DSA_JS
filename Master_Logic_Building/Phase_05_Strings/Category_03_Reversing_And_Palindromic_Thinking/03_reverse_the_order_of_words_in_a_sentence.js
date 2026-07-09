// =======================================================
// Problem    : Reverse the order of words in a sentence
// Phase      : Phase_05_Strings
// Level      : Category_03_Reversing_And_Palindromic_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  console.log(str.split(' ').reverse().join(' '));
}

solve('');
solve('Hello World');
solve('I love JavaScript'); // "I evol tpircSavaJ"

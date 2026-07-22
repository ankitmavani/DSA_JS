// =======================================================
// Problem    : Print digits of a number in words recursively
// Phase      : Phase_03_Recursion
// Level      : Level_02_Number_Based_Recursive_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

const words = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
];

function solve(num) {
  // Write your solution here
  if (!num) return '';
  return solve(parseInt(num / 10)) + words[num % 10] + ' ';
}

console.log(solve(1239801));

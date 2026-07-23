// ==========================================
// Problem: Print digits in words
// Category: phase_02_linear_number_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

const words = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

function solve(num, str = '') {
  // TODO: implement
  if (!num) return '';
  return solve(parseInt(num / 10)) + words[num % 10] + ' ';
}

console.log(solve(1234501));

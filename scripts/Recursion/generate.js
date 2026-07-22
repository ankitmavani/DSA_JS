const fs = require('fs');
const path = require('path');

const basePath = './Recursion'; // ✅ FIXED NAME

const phases = {
  phase_01_recursion_mindset: [
    'Print Hello exactly 5 times',
    'Print numbers from 1 to 5 without parameters',
    'Print numbers from 5 to 1',
    'Print Before Call and After Call',
    'Print numbers from 1 to n after recursive call',
    'Print numbers from 1 to n before recursive call',
    'Print Start once and End once',
    'Print current value of n',
    'Recursive function stops when n equals 0',
    'Dry run recursion and call stack',
  ],

  phase_02_linear_number_recursion: [
    'Print numbers from 1 to n',
    'Print numbers from n to 1',
    'Print even numbers from 1 to n',
    'Print odd numbers from 1 to n',
    'Sum of first n natural numbers',
    'Factorial',
    'Power x raised to n',
    'Nth Fibonacci number',
    'Fibonacci series',
    'Count digits',
    'Sum of digits',
    'Product of digits',
    'Reverse a number',
    'Palindrome number',
    'Decimal to Binary',
    'Decimal to Octal',
    'Print digits one by one',
    'Print digits in reverse',
    'Print digits in words',
    'Count zeros',
  ],

  phase_03_mathematical_thinking: [
    'GCD using Euclid algorithm',
    'LCM using recursion',
    'nCr using Pascal relation',
    'Sum of first n even numbers',
    'Sum of first n odd numbers',
    'Prime number',
    'Count prime digits',
    'Maximum and minimum digit',
    'Tower of Hanoi',
    'Count occurrences of digit',
    'Armstrong number',
    'Fast exponentiation',
    'Log base 2',
    'Trailing zeros in factorial',
    'Digital root',
  ],

  phase_04_controlled_printing_patterns: [
    'Print n stars',
    'Print square pattern',
    'Right triangle top down',
    'Right triangle bottom up',
    'Inverted triangle',
    'Pyramid pattern',
    'Repeated number pattern',
    'Multiplication table',
    'Tables from 1 to n',
    'Increasing then decreasing numbers',
    'Sum series step by step',
    'Pattern using two recursive functions',
    'Pattern using one recursive function',
    'Diagonal pattern',
    'Pattern using parameters',
  ],

  phase_05_string_recursion: [
    'Print characters',
    'Print reverse characters',
    'Reverse string',
    'Palindrome string',
    'Count vowels',
    'Count consonants',
    'Remove spaces',
    'Remove vowels',
    'Replace character',
    'Remove character',
    'Character frequency',
    'Convert to uppercase',
    'Convert to lowercase',
    'Contains only digits',
    'Contains only alphabets',
    'Count words',
    'Remove duplicate characters',
    'Print string without length',
    'Compare two strings',
    'Anagram check',
  ],

  phase_06_array_recursion: [
    'Print array',
    'Print reverse array',
    'Sum of array',
    'Maximum element',
    'Minimum element',
    'Count even elements',
    'Count odd elements',
    'Check sorted array',
    'First occurrence',
    'Last occurrence',
    'Count occurrences',
    'Reverse array',
    'Palindrome array',
    'Replace even numbers with zero',
    'Product of array',
    'Alternate elements',
    'Index of maximum element',
    'Index of minimum element',
    'Contains duplicate',
    'Merge two arrays',
  ],
};

function formatFileName(index, title) {
  return `${String(index + 1).padStart(2, '0')}_${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')}.js`;
}

function createFile(folder, index, title) {
  const fileName = formatFileName(index, title);
  const filePath = path.join(basePath, folder, fileName);

  const content = `// ==========================================
// Problem: ${title}
// Category: ${folder}
// Difficulty: Easy
// Status: ❌ Not Solved
// ==========================================

function solve() {
  // TODO: implement
}

solve();
`;

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
  }
}

function generate() {
  if (!fs.existsSync(basePath)) fs.mkdirSync(basePath);

  Object.entries(phases).forEach(([folder, problems]) => {
    const folderPath = path.join(basePath, folder);

    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);

    problems.forEach((title, index) => {
      createFile(folder, index, title);
    });
  });

  console.log('✅ All files generated correctly');
}

generate();

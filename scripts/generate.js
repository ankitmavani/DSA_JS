const fs = require('fs');
const path = require('path');

const basePath = './Basic_program'; // ✅ FIXED NAME

const phases = {
  while_loop: [
    'Print all numbers from 1 to 10 using a loop',
    'Print numbers from 10 down to 1 in reverse order',
    'Print all even numbers between 1 and 100',
    'Print all odd numbers between 1 and 100',
    'Multiplication table from n × 1 to n × 10',
    'Sum of first n natural numbers',
    'Sum of even numbers up to n',
    'Sum of odd numbers up to n',
    'Factorial of a number',
    'Product of digits of a number',
    'Count digits of a number',
    'Reverse a number',
    'Check palindrome number',
    'Sum of digits of a number',
    'Check Armstrong number',
    'Check Perfect number',
    'Print prime numbers from 1 to 100',
    'Check prime number',
    'Fibonacci series up to n terms',
    'Sum of Fibonacci series',
    'Square of numbers from 1 to n',
    'Cube of numbers from 1 to n',
    'Numbers divisible by 7 between a and b',
    'Print all factors of a number',
    'Sum of all factors',
    'Find HCF of two numbers',
    'Find LCM of two numbers',
    'Smallest digit in number',
    'Largest digit in number',
  ],

  do_while_loop: [
    'Print numbers from 1 to 10',
    'Multiplication table',
    'Sum until user enters 0',
    'Find largest number until 0',
    'Count digits',
    'Reverse number',
    'Check palindrome',
    'Check Armstrong',
    'Factorial',
    'Fibonacci series',
    'Find HCF',
    'Menu driven program',
    'Count positive numbers until negative',
    'Sum of digits',
    'Sum of even and odd digits separately',
  ],

  for_loop: [
    'Print numbers from 1 to 10',
    'Print numbers from 10 to 1',
    'Even numbers 1 to 100',
    'Odd numbers 1 to 100',
    'Multiplication table',
    'Factorial',
    'Factorial from 1 to n',
    'Prime numbers 1 to 100',
    'Check prime',
    'Fibonacci series',
    'Sum of Fibonacci',
    'Print factors',
    'Sum of factors',
    'Find HCF',
    'Find LCM',
    'Square 1 to n',
    'Cube 1 to n',
    'Divisible by 7 between a and b',
    'Sum of n natural numbers',
    'Sum of even numbers',
    'Sum of odd numbers',
  ],

  nested_loop: [
    'Multiplication tables from 1 to 10',
    'All pairs (i, j)',
    'Count factors for each number',
    'Prime numbers using nested loop',
    'Fibonacci pattern',
    'Number triangle pattern',
    'Matrix row and column sum',
    'Pythagorean triplets',
  ],

  break_continue: [
    'Stop at number divisible by 17',
    'Skip numbers divisible by 5',
    'Skip zero and sum input',
    'Search element and break',
    'Stop at negative number',
    'Print only even numbers',
    'Stop when sum > 100',
  ],

  mathematical_series: [
    'Sum of first n natural numbers',
    'Sum of first n even numbers',
    'Sum of first n odd numbers',
    'Arithmetic progression',
    'Geometric progression',
    'Fibonacci series',
    'Sum of Fibonacci',
    'Sum of squares series',
    'Sum of cubes series',
    'Harmonic series',
    'Power of two series',
    'Sum of factorial series',
    'x power series',
    'Alternate factorial series',
    'Check Strong number',
  ],

  mixed_problems: [
    'Numbers with even digit sum',
    'Count numbers divisible by 7 not 5',
    'Palindrome numbers 1 to 500',
    'Numbers with digit sum multiple of 3',
    'Binary numbers with even 1s',
    'Square pattern i*i',
    'Sum of odd and even digits',
    'Armstrong numbers 1 to 1000',
    'Perfect numbers 1 to 1000',
    'Max digit sum number',
  ],

  star_patterns: [
    'Single star',
    'Four stars',
    'n stars in a line',
    'Square pattern',
    'Increasing triangle',
    'Right aligned triangle',
    'Even star pattern',
    'Odd star pattern',
    'Centered pyramid',
    'Star and space alternate',
    'Number increasing pattern',
    'Repeated numbers pattern',
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

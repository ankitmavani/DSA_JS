const fs = require('fs');
const path = require('path');

const basePath = './Master_Logic_Building'; // ✅ FIXED NAME

const phases = {
  Phase_01_Conditional_Thinking: {
    Level_01_Simple_Conditions: [
      "Take a number and print whether it's positive, negative, or zero",
      'Check if a number is even or odd',
      'Check if a number is divisible by 5',
      'Check if a number is divisible by both 3 and 5',
      'Check if a given year is a leap year',
      'Take two numbers and print the larger one',
      'Take three numbers and print the largest',
      'Take a temperature value and print Cold, Warm, or Hot using range conditions',
      "Take a character and check if it's a vowel or consonant",
      "Take a character and check whether it's uppercase, lowercase, a digit, or a special character",
    ],

    Level_02_Nested_If_Multiple_Conditions: [
      'Take three sides and check if they form a valid triangle',
      'Determine whether the triangle is equilateral, isosceles, or scalene',
      'Take marks (0-100) and print the corresponding grade (A/B/C/D/F)',
      'Check if one of two given numbers is a multiple of the other',
      'Take the hour of the day (0-23) and print Good Morning, Good Afternoon, Good Evening, or Good Night',
      'Check voting eligibility for a given age (18+)',
      'Take two numbers and determine whether both are even, both are odd, or one is even and one is odd',
      'Take an alphabet character and check if it lies between a-m or n-z',
      'Take a day number (1-7) and print the corresponding day name',
      'Take a month number (1-12) and print the number of days in that month',
    ],

    Level_03_Math_And_Number_Logic: [
      'Take a 3-digit number and check if all digits are distinct',
      'Take a 3-digit number and determine if the middle digit is the largest, smallest, or neither',
      'Take a 4-digit number and check if the first and last digits are equal',
      'Check whether a given integer is single-digit, double-digit, or multi-digit',
      'Check if a number is a multiple of 7 or ends with 7',
      'Take coordinates (x, y) and determine which quadrant the point lies in',
      'Check if an amount can be evenly divided into 2000, 500, and 100 currency notes',
      'Check if a number lies within the range [100, 999]',
      'Take two angles of a triangle and compute the third angle',
      'Check whether a number is a perfect square (without using square root)',
    ],

    Level_04_Logical_Operators_Compound_Statements: [
      'Take a character and check if it is a letter, a digit, or neither',
      'FizzBuzz',
      'Take three numbers and print the median value',
      'Take 24-hour time and print whether it is AM or PM',
      'Take income and age, and check tax eligibility',
      'Take two numbers and check if both are positive and their sum is less than 100',
      'Take a single digit (0-9) and print its word form',
      'Take a weekday number (1-7) and determine if it is a weekday or weekend',
      'Take electricity units consumed and calculate the bill as per slabs',
      'Validate a password (length >= 8 and contains at least one digit)',
    ],

    Level_05_Creative_Tricky_Logical_Scenarios: [
      'Take coordinates (x, y) and check if the point lies on X-axis, Y-axis, or Origin',
      'Take three numbers and check if they can form a Pythagorean triplet',
      'Take day and month and check if it forms a valid calendar date',
      'Take time (hours and minutes) and print the smaller angle between clock hands',
      'Take three numbers and check if they are in arithmetic progression',
      'Take three numbers and check if they are in geometric progression',
      'Take a 3-digit number and check if the sum of first and last digit equals the middle digit',
      'Take an integer (1-9999) and check if the sum of digits is greater than the product of digits',
      'Take two dates (day and month) and determine which one comes first',
      'Take a year and print the corresponding century',
    ],
  },
  Phase_02_Looping_And_Patterns: {
    Level_01_Basic_Looping: [
      'Print numbers from 1 to 10',
      'Print all even numbers between 1 and 100',
      'Print all odd numbers between 1 and 100',
      'Print numbers from 10 down to 1',
      'Print the multiplication table of a given number (n × 1 to n × 10)',
      'Print the sum of first n natural numbers',
      'Print the sum of all even numbers up to n',
      'Print the sum of all odd numbers up to n',
      'Print the factorial of a given number',
      'Print the product of digits of a given number',
    ],

    Level_02_Number_Based_Looping_Logic: [
      'Count the number of digits in a given number',
      'Print the reverse of a given number',
      'Check if a number is a palindrome',
      'Find the sum of digits of a number',
      'Check if a number is an Armstrong number',
      'Check if a number is a perfect number',
      'Print all prime numbers between 1 and 100',
      'Check if a number is prime or not',
      'Print Fibonacci series up to n terms',
      'Print the sum of first n terms of Fibonacci series',
    ],

    Level_03_Mathematical_And_Logical_Patterns: [
      'Print the squares of numbers from 1 to n',
      'Print cubes of numbers from 1 to n',
      'Print all numbers between a and b divisible by 7',
      'Find HCF (GCD) of two numbers using loops',
      'Find LCM of two numbers using loops',
      'Print all factors of a given number',
      'Find the sum of all factors of a number',
      'Check if a number is a Strong number',
      'Print first n terms of an Arithmetic Progression (AP)',
      'Print first n terms of a Geometric Progression (GP)',
    ],

    Level_04_Pattern_Printing_Stars_And_Numbers: [
      'Single star pattern',
      'Horizontal line of n stars',
      'Square star pattern',
      'Rectangle star pattern',
      'Increasing star triangle',
      'Decreasing star triangle',
      'Right aligned triangle',
      'Left aligned triangle',
      'Centered pyramid',
      'Inverted pyramid',
      'Diamond pattern',
      'Hollow square',
      'Hollow rectangle',
      'Hollow triangle',
      'Hollow pyramid',
      'Number increasing triangle',
      'Number decreasing triangle',
      'Repeated number triangle',
      "Floyd's triangle",
      'Pascal triangle',
      'Character triangle',
      'Alphabet pyramid',
      'Butterfly pattern',
      'Hourglass pattern',
      'X pattern',
    ],

    Level_05_Logical_Loop_Combinations: [
      'Print all numbers whose sum of digits is even (1-100)',
      'Count how many numbers between 1-500 are divisible by 7 but not by 5',
      'Print all palindrome numbers between 1-500',
      'Print numbers between 1-100 whose digits add up to a multiple of 3',
      'Find the smallest digit in a given number',
      'Find the largest digit in a given number',
      'Print all numbers from 1-n whose binary representation has an even number of 1s',
      'Print factorial of each number from 1 to n',
      'Print the sum of odd digits and even digits separately in a number',
      'Take 5 numbers as input, skip 0 using continue, and print the sum of all non-zero numbers',
    ],
  },
  Phase_03_Recursion: {
    Level_01_Foundation_Of_Recursion: [
      'Print numbers from 1 to n using recursion',
      'Print numbers from n down to 1 using recursion',
      'Print only even numbers from 1 to n recursively',
      'Print only odd numbers from 1 to n recursively',
      'Print the sum of first n natural numbers recursively',
      'Print the factorial of a number recursively',
      'Calculate the power of a number (x^n) using recursion',
      'Find the nth Fibonacci number recursively',
      'Print Fibonacci series up to n terms recursively',
      'Find the sum of digits of a number recursively',
    ],

    Level_02_Number_Based_Recursive_Thinking: [
      'Count the number of digits in a number recursively',
      'Reverse a number recursively',
      'Check if a number is a palindrome using recursion',
      'Find the product of digits of a number recursively',
      "Find GCD (HCF) of two numbers using Euclid's algorithm recursively",
      'Convert a number to binary recursively',
      'Print digits of a number in words recursively',
      'Calculate the sum of first n even numbers recursively',
      'Calculate the sum of first n odd numbers recursively',
      "Find nCr (Combination) recursively using Pascal's relation",
    ],

    Level_03_Pattern_And_Printing_Problems: [
      'Print a line of n stars recursively',
      'Print a square of stars recursively (n × n)',
      'Print a triangle of stars recursively (top-down)',
      'Print a triangle of stars recursively (bottom-up)',
      'Print number pattern recursively (1 to n each row)',
      'Print reverse triangle pattern recursively',
      'Print multiplication table of n recursively',
      'Print numbers in increasing and decreasing order in the same recursive function',
      'Print the sum of series 1 + 2 + 3 + ... + n recursively and display each step',
      'Print character pattern (A, AB, ABC, ...) recursively',
    ],

    Level_04_String_Based_Recursion: [
      'Reverse a string using recursion',
      'Check if a string is a palindrome using recursion',
      'Count vowels in a string recursively',
      'Remove all spaces from a string recursively',
      'Replace all occurrences of a character recursively',
      'Remove all occurrences of a character recursively',
      'Print all characters of a string one by one recursively',
      'Print the string in reverse order recursively (without loops)',
      'Convert a string to uppercase recursively',
      'Count consonants and vowels separately using recursion',
    ],
  },
  Phase_04_Basic_Arrays: {
    Level_01_Fundamentals_Of_Arrays: [
      'Input n and take n integers into an array then print them',
      'Find the sum of all elements in an array',
      'Find the average of array elements',
      'Find the maximum element in an array',
      'Find the minimum element in an array',
      'Count how many elements are positive, negative, or zero',
      'Count how many elements are even and odd',
      'Find the index of the maximum element',
      'Find the index of the minimum element',
      'Print all elements greater than a given value k',
    ],

    Level_02_Searching_And_Counting_Logic: [
      'Check whether a given element exists in the array',
      'Count how many times a given element appears',
      'Find the first occurrence of a given element',
      'Find the last occurrence of a given element',
      'Check whether all elements in an array are unique',
      'Find the sum of all even elements',
      'Find the sum of all odd elements',
      'Count how many prime numbers are present in the array',
      'Count how many numbers are divisible by both 3 and 5',
      'Count how many elements are perfect squares',
    ],

    Level_03_Transformation_And_Manipulation: [
      'Create a new array containing squares of all numbers',
      'Create a new array containing only even elements',
      'Replace every negative number with 0',
      'Replace all even numbers with 1 and all odd numbers with 0',
      'Swap the first and last elements of the array',
      'Reverse an array without using the built-in reverse method',
      'Rotate an array by one position to the left',
      'Rotate an array by one position to the right',
      'Swap alternate elements in the array',
      'Copy one array to another manually',
    ],

    Level_04_Aggregate_And_Comparative_Thinking: [
      'Compare two arrays and check if they are equal (same elements and same order)',
      'Compare two arrays and check if they contain the same elements regardless of order',
      'Merge two arrays into a third array',
      'Find the common elements between two arrays',
      'Find elements that exist in one array but not in the other',
      'Count how many elements are common between two arrays',
      'Find the element-wise sum of two arrays',
      'Find the element-wise product of two arrays',
      'Create a frequency array for numbers',
      'Print all duplicate elements in an array',
    ],

    Level_05_Logical_And_Applied_Array_Problems: [
      'Check whether an array is sorted in ascending order',
      'Check whether an array is sorted in descending order',
      'Find the second largest element in an array',
      'Find the second smallest element in an array',
      'Find the difference between the largest and smallest elements',
      'Find the sum of all elements except the largest and smallest',
      'Count how many pairs have a sum equal to a given value k',
      'Count how many elements are greater than the average of the array',
      'Print the frequency of each distinct element',
      'Print all unique elements that occur exactly once',
    ],
  },
  Phase_05_Strings: {
    Category_01_Basic_String_Handling: [
      'Take a string input and print its length',
      'Print the first and last character of a string',
      'Convert all characters of a string to uppercase',
      'Convert all characters of a string to lowercase',
      'Count how many characters (excluding spaces) are in the string',
      'Count how many words are in a sentence',
      'Take two strings and print them concatenated',
      'Compare two strings lexicographically',
      'Print the ASCII value of each character in a string',
      'Check whether the string is empty or not',
    ],

    Category_02_Counting_And_Character_Analysis: [
      'Count how many vowels and consonants are in a string',
      'Count the number of digits, letters, and special characters in a string',
      'Count how many uppercase and lowercase letters a string has',
      'Find the frequency of each character in a string without using a map',
      'Count how many spaces are there in a sentence',
      'Count how many times a given character appears in a string',
      "Count how many alphabets are before 'm' and after 'm' in a given string",
      'Count how many substrings start and end with the same character',
      'Print how many words start with a vowel in a sentence',
      "Count how many words end with 's'",
    ],

    Category_03_Reversing_And_Palindromic_Thinking: [
      'Reverse a string without using the built-in reverse method',
      'Reverse each word in a sentence',
      'Reverse the order of words in a sentence',
      'Check whether a string is a palindrome',
      'Check if two strings are the reverse of each other',
      'Print the middle character(s) of a string',
      'Print the second half of the string in reverse',
      'Remove the first and last character and print the remaining string',
      'Reverse only characters while keeping digits in place',
      'Reverse a string but skip spaces',
    ],

    Category_04_Character_And_Word_Manipulation: [
      'Remove all vowels from a string',
      'Remove all spaces from a string',
      "Replace all vowels with '*'",
      "Replace all spaces with '_'",
      'Print the string after removing all digits',
      'Remove duplicate characters from a string',
      'Keep only the first occurrence of each character',
      'Remove consecutive duplicate characters',
      'Swap the case of every character',
      'Shift each character by one position',
    ],

    Category_05_Word_Level_Thinking: [
      'Print each word of a sentence on a new line',
      'Count how many words have even length',
      'Find the longest word in a sentence',
      'Find the shortest word in a sentence',
      'Swap the first and last words in a sentence',
      'Print all words that start and end with the same letter',
      "Count how many words contain the letter 'a'",
      'Capitalize the first letter of each word',
      'Convert the sentence to title case',
      'Remove extra spaces between words',
    ],
  },
  Phase_06_Mixed_Logical_Challenges: {
    Category_01_Number_Based_Logical_Combinations: [
      'Print all numbers between 1 and N that are divisible by both 3 and 5',
      'Find the sum of digits of a number using a loop',
      'Check if a number is an Armstrong number',
      'Print all Armstrong numbers between 1 and 1000',
      'Find the factorial of a number using recursion',
      'Count how many even digits a number contains',
      'Print all prime numbers between 1 and N',
      'Print the reverse of a number',
      'Check if a number is a palindrome',
      'Check if a number is a perfect number',
    ],

    Category_02_String_And_Logic_Mix: [
      'Check if two strings are anagrams without using collections',
      'Count vowels in each word of a sentence',
      'Reverse words in a string if their length is even',
      'Replace every vowel in a string with its position',
      'Print characters that appear more than once without using a map',
      'Count words that start and end with the same letter',
      'Toggle case for every alternate word in a sentence',
      'Check if two strings are rotations of each other',
      'Find the word with the maximum vowels in a sentence',
      'Remove duplicate words from a sentence',
    ],

    Category_03_Array_And_Looping_Logic: [
      'Find the maximum and minimum element in an array',
      'Count how many positive, negative, and zero elements are in an array',
      'Print all unique elements from an array',
      'Reverse an array in-place',
      'Shift all zeros to the end of an array',
      'Count how many elements are even at an even index',
      'Merge two arrays into one',
      'Find the second largest element in an array',
      'Rotate an array by one position to the right',
      'Find the sum of all elements at odd indices',
    ],

    Category_04_Nested_Logic_And_Pattern_Flow: [
      'Print a multiplication table in a formatted 10x10 grid',
      'Print all pairs in an array whose sum equals a given number',
      'Print all subarrays of a given array',
      'Check if an array is sorted in ascending or descending order',
      'Count how many times a number appears consecutively in an array',
      'Find all pairs of characters in a string that are the same using nested loops',
      'Print a pattern of increasing characters (A, AB, ABC...)',
      "Print Pascal's triangle up to N rows",
      'Generate Fibonacci series up to N using recursion',
      'Print numbers in a spiral-like pattern (conceptual dry run)',
    ],

    Category_05_Applied_Reasoning_And_Real_Life_Logic: [
      'Given marks of students, count how many passed (marks >= 40)',
      'Take age inputs and count adults, minors, and senior citizens',
      'Validate a password with uppercase, lowercase, digit, and special character',
      'Simulate a simple calculator using switch-case',
      'Count how many times a coin lands on heads or tails using random',
      'Print the frequency of each digit in a number',
      'Find common elements between two arrays',
      'Print characters that are common in two strings',
      'Count how many prime numbers are present in an array',
      'Print all palindromic words from a sentence',
    ],
  },
};

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/×/g, 'x')
    .replace(/\^/g, 'power')
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function formatFileName(index, title) {
  return `${String(index + 1).padStart(2, '0')}_${slugify(title)}.js`;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function createProblemFile(filePath, phase, level, title) {
  const content = `// =======================================================
// Problem    : ${title}
// Phase      : ${phase}
// Level      : ${level}
// Difficulty : Easy
// Status     : ❌ Not Solved
// =======================================================

function solve() {
  // Write your solution here
}

solve();
`;

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
  }
}

function generate() {
  ensureDir(basePath);

  for (const [phaseName, levels] of Object.entries(phases)) {
    const phasePath = path.join(basePath, phaseName);
    ensureDir(phasePath);

    for (const [levelName, problems] of Object.entries(levels)) {
      const levelPath = path.join(phasePath, levelName);
      ensureDir(levelPath);

      problems.forEach((problem, index) => {
        const fileName = formatFileName(index, problem);
        const filePath = path.join(levelPath, fileName);

        createProblemFile(filePath, phaseName, levelName, problem);
      });
    }
  }

  console.log('✅ Complete Logic Building structure generated successfully!');
}

generate();

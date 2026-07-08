// =======================================================
// Problem    : Count how many prime numbers are present in the array
// Phase      : Phase_04_Basic_Arrays
// Level      : Level_02_Searching_And_Counting_Logic
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function isPrimeNumber(num) {
  // let isPrime = true
  for (let index = 2; index * index <= num; index++) {
    if (num % index === 0) {
      return false;
    }
  }
  return true;
}

function solve(arr) {
  // Write your solution here
  for (let index = 0; index < arr.length; index++) {
    if (isPrimeNumber(arr[index])) {
      console.log(arr[index]);
    }
  }
}

solve([2, 3, 4, 5, 6, 7, 8, 9, 10]);
solve([29, 31, 35, 37, 40, 41, 49, 53]);

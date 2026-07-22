// =======================================================
// Problem    : Find GCD (HCF) of two numbers using Euclid's algorithm recursively
// Phase      : Phase_03_Recursion
// Level      : Level_02_Number_Based_Recursive_Thinking
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(num1, num2, index = 1, min = Math.min(num1, num2), res = 1) {
  // Write your solution here
  if (index * index >= min) return res;

  if (num1 % index === 0 && num2 % index === 0) {
    res = Math.max(res, index);
    // console.log(num2%(min/index))
    if (num1 % (min / index) === 0 && num2 % (min / index) === 0) {
      res = Math.max(res, min / index);
    }
  }

  return solve(num1, num2, index + 1, min, res);
}

console.log(solve(12, 18));
console.log(solve(12, 24));
console.log(solve(48, 72));

// =======================================================
// Problem    : Take a 3-digit number and check if the sum of first and last digit equals the middle digit
// Phase      : Phase_01_Conditional_Thinking
// Level      : Level_05_Creative_Tricky_Logical_Scenarios
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function sumOfDigit(num) {
  let mid;
  let sum = 0;
  let count = 0;
  while (num) {
    if (count === 1) {
      mid = num % 10;
      num = parseInt(num / 10);
      count++;
      continue;
    }
    count++;
    sum += num % 10;
    num = parseInt(num / 10);
  }
  console.log(sum === mid);
}

function solve(num) {
  // Write your solution here
  sumOfDigit(num);
}

solve(143);
solve(178);
solve(176);

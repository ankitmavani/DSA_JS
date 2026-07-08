// =======================================================
// Problem    : Take an integer (1-9999) and check if the sum of digits is greater than the product of digits
// Phase      : Phase_01_Conditional_Thinking
// Level      : Level_05_Creative_Tricky_Logical_Scenarios
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function sumOfDigit(num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = parseInt(num / 10);
  }
  // console.log(sum);

  return sum;
}

function productOfDigit(num) {
  let product_num = 1;
  while (num) {
    product_num *= num % 10;
    num = parseInt(num / 10);
  }
  // console.log(product_num);

  return product_num;
}

function solve(num) {
  console.log(sumOfDigit(num) > productOfDigit(num));
  // Write your solution here
}

solve(121);
solve(564);

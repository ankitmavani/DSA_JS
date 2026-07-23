// ==========================================
// Problem: Armstrong number
// Category: phase_03_mathematical_thinking
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function countDigits(num) {
  if (num === 0) {
    return 0;
  }

  return 1 + countDigits(Math.floor(num / 10));
}

function power(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * power(base, exp - 1);
}

function armstrongSum(num, digits) {
  if (num === 0) {
    return 0;
  }

  let digit = num % 10;

  return power(digit, digits) + armstrongSum(Math.floor(num / 10), digits);
}

function isArmstrong(num) {
  let digits = countDigits(num);
  return armstrongSum(num, digits) === num;
}

console.log(isArmstrong(153)); // true
console.log(isArmstrong(370)); // true
console.log(isArmstrong(371)); // true
console.log(isArmstrong(407)); // true
console.log(isArmstrong(123)); // false

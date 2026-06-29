// ==========================================
// Problem: Sum of odd and even digits
// Category: mixed_problems
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  let sumEven = 0;
  let sumOdd = 0;
  while (num) {
    if ((num % 10) % 2 === 0) {
      sumEven += num % 10;
    } else {
      sumOdd += num % 10;
    }
    num = parseInt(num / 10);
  }
  console.log(sumEven, sumOdd);
}

solve(123456789);

// ==========================================
// Problem: Max digit sum number
// Category: mixed_problems
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function digitEven(num) {
  let sumDigit = 0;
  while (num) {
    sumDigit += num % 10;
    num = parseInt(num / 10);
  }
  return sumDigit;
}
function solve(num) {
  // TODO: implement
  let max = 1;
  let index_large = 1;
  for (let index = 1; index <= num; index++) {
    if (max < digitEven(index)) {
      max = Math.max(max, digitEven(index));
      index_large = index;
    }
  }
  console.log(index_large, max);
}

solve(90);

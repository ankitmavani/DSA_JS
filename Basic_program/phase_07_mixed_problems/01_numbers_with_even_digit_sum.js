// ==========================================
// Problem: Numbers with even digit sum
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
  return sumDigit % 2 === 0;
}

function solve() {
  // TODO: implement
  let count = 0;
  for (let index = 1; index <= 100; index++) {
    if (digitEven(index)) {
      count++;
    }
  }
  console.log(count);
}

solve();

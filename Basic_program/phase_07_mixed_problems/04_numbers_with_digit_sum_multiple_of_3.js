// ==========================================
// Problem: Numbers with digit sum multiple of 3
// Category: mixed_problems
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function digitDivided(num) {
  let sumDigit = 0;
  while (num) {
    sumDigit += num % 10;
    num = parseInt(num / 10);
  }
  return sumDigit % 3 === 0;
}

function solve() {
  // TODO: implement
  for (let index = 1; index <= 100; index++) {
    if (digitDivided(index)) {
      console.log(index);
    }
  }
}

solve();

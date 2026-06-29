// ==========================================
// Problem: Skip zero and sum input
// Category: break_continue
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

const numbers = [10, 0, 25, 0, 5];
let sum = 0;

function solve(num) {
  // TODO: implement
  for (let index = 0; index < num.length; index++) {
    if (num[index] === 0) {
      continue;
    }
    sum += num[index];
  }
  console.log(sum);
}

solve(numbers);

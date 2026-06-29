// ==========================================
// Problem: Count numbers divisible by 7 not 5
// Category: mixed_problems
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve() {
  // TODO: implement
  let count = 0;
  for (let index = 1; index <= 500; index++) {
    if (index % 7 === 0 && index % 5 !== 0) {
      count++;
    }
  }
  console.log(count);
}

solve();

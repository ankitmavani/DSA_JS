// ==========================================
// Problem: Skip numbers divisible by 5
// Category: break_continue
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve() {
  // TODO: implement
  for (let index = 1; index <= 100; index++) {
    if (index % 5 === 0) {
      continue;
    }
    console.log(index);
  }
}

solve();

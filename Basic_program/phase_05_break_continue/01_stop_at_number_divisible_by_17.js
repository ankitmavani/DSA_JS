// ==========================================
// Problem: Stop at number divisible by 17
// Category: break_continue
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve() {
  // TODO: impl
  for (let index = 1; index <= 100; index++) {
    if (index % 17 === 0) {
      console.log('stop', index);
      break;
    }
    console.log(index);
  }
}

solve();

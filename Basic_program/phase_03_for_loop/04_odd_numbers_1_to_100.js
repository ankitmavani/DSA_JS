// ==========================================
// Problem: Odd numbers 1 to 100
// Category: for_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve() {
  // TODO: implement
  for (let index = 1; index <= 100; index++) {
    if (index % 2 !== 0) {
      console.log(index);
    }
  }
}

solve();

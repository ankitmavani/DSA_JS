// ==========================================
// Problem: Print numbers from 1 to 5 without parameters
// Category: phase_01_recursion_mindset
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve() {
  // TODO: implement
  if (!solve.count) {
    solve.count = 1;
  }

  if (solve.count > 5) {
    return;
  }
  console.log(solve.count);
  solve.count++;
  solve();
}

solve();

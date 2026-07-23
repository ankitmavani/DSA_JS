// ==========================================
// Problem: Increasing then decreasing numbers
// Category: phase_04_controlled_printing_patterns
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num, index = 1) {
  // TODO: implement
  if (num <= index) {
    console.log(index);
    return;
  }
  console.log(index);
  solve(num, index + 1);
  console.log(index);
}

solve(5);

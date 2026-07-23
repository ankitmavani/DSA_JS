// ==========================================
// Problem: Multiplication table
// Category: phase_04_controlled_printing_patterns
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num, index = 1) {
  // TODO: implement
  if (index > 10) {
    return;
  }
  console.log(`${num} * ${index} = ${num * index}`);
  solve(num, index + 1);
}

solve(5);

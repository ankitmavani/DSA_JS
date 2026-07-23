// ==========================================
// Problem: Print n stars
// Category: phase_04_controlled_printing_patterns
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num, str = '') {
  // TODO: implement
  if (num === 0) {
    console.log(str);
    return;
  }
  str += '*';
  solve(num - 1, str);
}

solve(5);

// ==========================================
// Problem: Pattern using parameters
// Category: phase_04_controlled_printing_patterns
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(row, col, pattern, str = '') {
  // TODO: implement
  if (row === 0) {
    console.log(str);
    return;
  }
  if (col === 0) {
    return solve(row - 1, 4, pattern, str + '\n');
  }
  return solve(row, col - 1, pattern, str + `${pattern}`);
}

solve(4, 4, '#');

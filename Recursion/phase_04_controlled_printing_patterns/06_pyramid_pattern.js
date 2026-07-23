// ==========================================
// Problem: Pyramid pattern
// Category: phase_04_controlled_printing_patterns
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num, row = 0, col = 0, str = '') {
  // TODO: implement
  if (row === num) {
    console.log(str);
    return;
  }
  // console.log(col, num,row)
  if (col === num + row) {
    return solve(num, row + 1, 0, row + 1 === num ? str : str + '\n');
  }
  if (col < num - row - 1) {
    return solve(num, row, col + 1, (str += ' '));
  }
  return solve(num, row, col + 1, (str += '*'));
}

solve(5);

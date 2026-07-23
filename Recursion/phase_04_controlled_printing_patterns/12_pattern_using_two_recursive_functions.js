// ==========================================
// Problem: Pattern using two recursive functions
// Category: phase_04_controlled_printing_patterns
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function printPattern(num, str = '') {
  if (num === 0) {
    console.log(str);
    return '';
  }
  str += '*';
  printPattern(num - 1, str);
}

function solve(num) {
  // TODO: implement
  if (num === 0) {
    return;
  }
  printPattern(num);
  solve(num - 1);
  // return '\n'+ printPattern(num)
}

solve(5);

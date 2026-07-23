// ==========================================
// Problem: Print reverse characters
// Category: phase_05_string_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(str, index = str.length) {
  // TODO: implement
  if (index === 0) {
    return '';
  }
  return str[index - 1] + solve(str, index - 1);
}

console.log(solve('hello'));

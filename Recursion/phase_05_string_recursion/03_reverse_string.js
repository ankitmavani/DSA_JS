// ==========================================
// Problem: Reverse string
// Category: phase_05_string_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(str, rev_str = '', index = str.length) {
  // TODO: implement
  if (index === 0) return rev_str;
  rev_str += str[index - 1];
  return solve(str, rev_str, index - 1);
}

console.log(solve('hello'));

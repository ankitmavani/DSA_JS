// ==========================================
// Problem: Remove duplicate characters
// Category: phase_05_string_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(str, index = 0, result = '') {
  // TODO: implement
  if (str.length === index) {
    return result;
  }
  if (result.includes(str[index])) {
    return solve(str, index + 1, result);
  }
  return solve(str, index + 1, result + str[index]);
}

console.log(solve('programming'));

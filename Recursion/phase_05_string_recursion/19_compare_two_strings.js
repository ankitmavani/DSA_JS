// ==========================================
// Problem: Compare two strings
// Category: phase_05_string_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(str1, str2, index = 0) {
  // TODO: implement
  if (str1[index] === undefined && str2[index] === undefined) {
    return true;
  }
  if (str1[index] !== str2[index]) {
    return false;
  }
  return solve(str1, str2, index + 1);
}

console.log(solve('hello', 'hello')); // true
console.log(solve('apple', 'apple')); // true
console.log(solve('hello', 'world')); // false
console.log(solve('abc', 'abcd')); // false
console.log(solve('abcd', 'abc')); // false

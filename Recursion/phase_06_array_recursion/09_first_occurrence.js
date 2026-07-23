// ==========================================
// Problem: First occurrence
// Category: phase_06_array_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(arr, k, index = 0) {
  // TODO: implement
  if (arr.length === index) return -1;
  if (arr[index] === k) return index;
  return solve(arr, k, index + 1);
}

console.log(solve([1, 2, 3, 4, 5], 4));

// ==========================================
// Problem: Last occurrence
// Category: phase_06_array_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(arr, k, index = arr.length) {
  // TODO: implement
  if (index < 0) return -1;
  if (arr[index] === k) return index;
  return solve(arr, k, index - 1);
}

console.log(solve([1, 2, 4, 6, 7, 4, 2, 3, 4, 6, 7, 3, 2, 4], 2));

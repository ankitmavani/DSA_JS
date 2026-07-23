// ==========================================
// Problem: Count occurrences
// Category: phase_06_array_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(arr, k, index = arr.length) {
  // TODO: implement
  if (index < 0) return 0;
  if (arr[index] === k) return 1 + solve(arr, k, index - 1);
  return solve(arr, k, index - 1);
}

console.log(solve([1, 2, 4, 6, 7, 4, 2, 3, 4, 6, 7, 3, 2, 4], 4));

// ==========================================
// Problem: Index of maximum element
// Category: phase_06_array_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(arr, index = 1, max = 0) {
  // TODO: implement
  if (arr.length === index) {
    return max;
  }
  return solve(arr, index + 1, arr[max] < arr[index] ? index : max);
}

console.log(solve([1, 2, 6, 7, 3, 4, 9]));

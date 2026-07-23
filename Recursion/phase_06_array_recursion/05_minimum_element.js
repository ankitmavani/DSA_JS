// ==========================================
// Problem: Minimum element
// Category: phase_06_array_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(arr, index = 0, min = Number.POSITIVE_INFINITY) {
  // TODO: implement
  if (arr.length === index) {
    return min;
  }
  return solve(arr, index + 1, min > arr[index] ? arr[index] : min);
}

console.log(solve([2, 6, 7, 1, 3, 4]));

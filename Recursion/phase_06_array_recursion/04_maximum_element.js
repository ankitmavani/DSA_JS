// ==========================================
// Problem: Maximum element
// Category: phase_06_array_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(arr, index = 0, max = Number.NEGATIVE_INFINITY) {
  // TODO: implement
  if (arr.length === index) {
    return max;
  }
  return solve(arr, index + 1, max < arr[index] ? arr[index] : max);
}

console.log(solve([1, 2, 6, 7, 3, 4]));

// ==========================================
// Problem: Check sorted array
// Category: phase_06_array_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(arr, index = 0) {
  // TODO: implement
  if (arr.length === index - 1) {
    return true;
  }
  if (arr[index] > arr[index + 1]) {
    return false;
  }
  return solve(arr, index + 1);
}

console.log(solve([1, 2, 3, 4, 5, 6]));
console.log(solve([1, 7, 2, 3, 4, 5, 6]));

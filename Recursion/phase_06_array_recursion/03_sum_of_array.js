// ==========================================
// Problem: Sum of array
// Category: phase_06_array_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(arr, index = 0) {
  // TODO: implement
  if (arr.length === index) {
    return 0;
  }
  // console.log(arr[index])
  return arr[index] + solve(arr, index + 1);
}

console.log(solve([1, 2, 3, 4, 5, 6]));

// solve();

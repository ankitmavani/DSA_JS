// ==========================================
// Problem: Replace even numbers with zero
// Category: phase_06_array_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(arr, index = 0) {
  // TODO: implement
  if (arr.length === index) return arr;
  if (arr[index] % 2 === 0) arr[index] = 0;
  return solve(arr, index + 1);
}

console.log(solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

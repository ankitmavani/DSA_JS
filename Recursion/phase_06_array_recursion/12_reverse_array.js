// ==========================================
// Problem: Reverse array
// Category: phase_06_array_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(arr, left = 0, right = arr.length - 1) {
  // TODO: implement
  if (left > right) return arr;
  [arr[left], arr[right]] = [arr[right], arr[left]];
  return solve(arr, left + 1, right - 1);
}

console.log(solve([1, 2, 3, 4, 5, 8]));

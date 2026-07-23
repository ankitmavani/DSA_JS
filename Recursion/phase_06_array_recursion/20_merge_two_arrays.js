// ==========================================
// Problem: Merge two arrays
// Category: phase_06_array_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(arr1, arr2, arr = [], index = 0) {
  // TODO: implement
  if (index >= arr1.length + arr2.length) {
    return arr;
  }
  if (index < arr1.length) {
    arr.push(arr1[index]);
    return solve(arr1, arr2, arr, index + 1);
  }
  arr[index] = arr2[index - arr1.length];
  return solve(arr1, arr2, arr, index + 1);
}

console.log(solve([1, 2, 3], [4, 5, 6]));
console.log(solve([10, 20], [30, 40, 50]));

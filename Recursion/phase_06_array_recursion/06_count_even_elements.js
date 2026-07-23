// ==========================================
// Problem: Count even elements
// Category: phase_06_array_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(arr, index = 0) {
  // TODO: implement
  if (arr.length === index) {
    return 0;
  }
  return (arr[index] % 2 === 0 ? 1 : 0) + solve(arr, index + 1);
}

console.log(solve([1, 2, 6, 7, 3, 4]));

console.log(solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

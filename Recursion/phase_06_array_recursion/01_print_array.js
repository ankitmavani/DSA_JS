// ==========================================
// Problem: Print array
// Category: phase_06_array_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(arr, index = 0) {
  // TODO: implement
  if (arr.length === index) {
    return;
  }
  console.log(arr[index]);
  solve(arr, index + 1);
}

solve([1, 2, 3, 4, 5, 6]);

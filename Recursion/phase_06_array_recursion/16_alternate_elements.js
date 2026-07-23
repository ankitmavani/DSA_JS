// ==========================================
// Problem: Alternate elements
// Category: phase_06_array_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(arr, index = 0) {
  // TODO: implement
  if (arr.length <= index) return;
  console.log(arr[index]);
  solve(arr, index + 2);
}

solve([10, 20, 30, 40, 50, 60]);

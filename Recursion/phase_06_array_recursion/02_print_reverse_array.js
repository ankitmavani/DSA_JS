// ==========================================
// Problem: Print reverse array
// Category: phase_06_array_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(arr, index = arr.length) {
  // TODO: implement
  if (index === 0) {
    return;
  }
  console.log(arr[index - 1]);
  solve(arr, index - 1);
}

solve([1, 2, 3, 4, 5, 6]);

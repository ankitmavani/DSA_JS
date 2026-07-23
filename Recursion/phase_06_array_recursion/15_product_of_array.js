// ==========================================
// Problem: Product of array
// Category: phase_06_array_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function product(arr, index = 0) {
  if (index === arr.length) {
    return 1;
  }

  return arr[index] * product(arr, index + 1);
}

console.log(product([1, 2, 3, 4])); // 24
console.log(product([5, 2, 3])); // 30
console.log(product([7])); // 7
console.log(product([])); // 1

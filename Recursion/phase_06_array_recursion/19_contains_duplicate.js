// ==========================================
// Problem: Contains duplicate
// Category: phase_06_array_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function containsDuplicate(arr, index = 0, next = index + 1) {
  if (index === arr.length) {
    return false;
  }

  if (next === arr.length) {
    return containsDuplicate(arr, index + 1, index + 2);
  }

  if (arr[index] === arr[next]) {
    return true;
  }

  return containsDuplicate(arr, index, next + 1);
}

console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 2, 3, 2])); // true
console.log(containsDuplicate([5, 5, 6, 7])); // true
console.log(containsDuplicate([10])); // false
console.log(containsDuplicate([])); // false

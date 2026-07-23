// ==========================================
// Problem: Contains only digits
// Category: phase_05_string_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function containsOnlyDigits(str, index = 0) {
  if (index === str.length) {
    return true;
  }

  if (str[index] < '0' || str[index] > '9') {
    return false;
  }

  return containsOnlyDigits(str, index + 1);
}

console.log(containsOnlyDigits('12345')); // true
console.log(containsOnlyDigits('987654')); // true
console.log(containsOnlyDigits('12a45')); // false
console.log(containsOnlyDigits('123 45')); // false
console.log(containsOnlyDigits('')); // true

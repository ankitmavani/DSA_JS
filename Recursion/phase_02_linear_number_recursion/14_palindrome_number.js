// ==========================================
// Problem: Palindrome number
// Category: phase_02_linear_number_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num, num2 = num, rev = 0) {
  // TODO: implement
  if (!num) return rev === num2;
  rev = rev * 10 + (num % 10);
  return solve(parseInt(num / 10), num2, rev);
}

console.log(solve(123454321));
console.log(solve(3232343));

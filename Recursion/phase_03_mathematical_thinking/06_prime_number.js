// ==========================================
// Problem: Prime number
// Category: phase_03_mathematical_thinking
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num, index = 2) {
  // TODO: implement
  if (index * index > num) {
    return true;
  }
  if (num % index === 0) {
    return false;
  }
  return solve(num, index + 1);
}

console.log(solve(10));
console.log(solve(7));
console.log(solve(83));
console.log(solve(10));
console.log(solve(10));

// ==========================================
// Problem: Digital root
// Category: phase_03_mathematical_thinking
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function sumOfDigit(num) {
  if (!num) return 0;
  return (num % 10) + solve(parseInt(num / 10));
}

function solve(num) {
  // TODO: implement
  if (num < 10) {
    return num;
  }

  return solve(sumOfDigit(num));
}

console.log(solve(1234)); // 1
console.log(solve(9875)); // 2
console.log(solve(999)); // 9
console.log(solve(45678)); // 3
console.log(solve(1001)); // 2

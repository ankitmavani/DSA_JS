// ==========================================
// Problem: Print even numbers from 1 to n
// Category: phase_02_linear_number_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  if (num === 0) {
    return;
  }

  solve(num - 1);
  if (num % 2 === 0) {
    console.log(num);
  }
}

solve(10);

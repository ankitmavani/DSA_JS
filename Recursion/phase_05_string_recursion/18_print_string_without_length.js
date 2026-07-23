// ==========================================
// Problem: Print string without length
// Category: phase_05_string_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(str, index = 0) {
  // TODO: implement
  if (str[index] === undefined) {
    return;
  }
  console.log(str[index]);
  solve(str, index + 1);
}

solve('HELLO');

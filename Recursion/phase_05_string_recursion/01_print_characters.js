// ==========================================
// Problem: Print characters
// Category: phase_05_string_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(str, index = 0) {
  // TODO: implement
  if (str.length === index) {
    return;
  }
  console.log(str[index]);
  solve(str, index + 1);
}

solve('chat');

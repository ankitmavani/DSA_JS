// ==========================================
// Problem: Tower of Hanoi
// Category: phase_03_mathematical_thinking
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n, source, destination, helper) {
  // TODO: implement
  if (n === 1) {
    console.log(`${source} to ${destination}`);
    return;
  }
  solve(n - 1, source, helper, destination);
  console.log(`${source} to ${destination}`);
  solve(n - 1, helper, destination, source);
}

solve(4, 'A', 'C', 'B');

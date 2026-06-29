// ==========================================
// Problem: Factorial from 1 to n
// Category: for_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  for (let index_i = 1; index_i <= n; index_i++) {
    let facto = 1;
    for (let index = 1; index <= index_i; index++) {
      facto *= index;
    }
    console.log(`${index_i}=${facto}`);
  }
}

solve(10);

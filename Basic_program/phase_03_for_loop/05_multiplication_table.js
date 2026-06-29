// ==========================================
// Problem: Multiplication table
// Category: for_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  for (let index = 1; index <= 10; index++) {
    console.log(`${n}*${index}=${n * index}`);
  }
}

solve(6);

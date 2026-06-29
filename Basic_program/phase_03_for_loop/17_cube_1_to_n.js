// ==========================================
// Problem: Cube 1 to n
// Category: for_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  for (let index = 1; index <= n; index++) {
    console.log(`${index} = ${index * index * index}`);
  }
}

solve(10);

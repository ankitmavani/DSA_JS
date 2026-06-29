// ==========================================
// Problem: Print only even numbers
// Category: break_continue
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  for (let index = 1; index <= num; index++) {
    if (index % 2 === 0) {
      console.log(index);
    } else {
      continue;
    }
  }
}

solve(20);

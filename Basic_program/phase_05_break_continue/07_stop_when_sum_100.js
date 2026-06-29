// ==========================================
// Problem: Stop when sum > 100
// Category: break_continue
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  let sum = 0;
  for (let index = 0; index < num; index++) {
    sum += index;
    console.log(index, sum);
    if (sum >= 100) {
      break;
    }
  }
}

solve(100);

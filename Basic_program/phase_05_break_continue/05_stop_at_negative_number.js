// ==========================================
// Problem: Stop at negative number
// Category: break_continue
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(array) {
  // TODO: implement
  for (let index = 0; index < array.length; index++) {
    if (array[index] < 0) {
      break;
    }
    console.log(array[index]);
  }
}

solve([12, 43, 56, 23, -23, 45, 67, 87, 32, 1, 3, 54]);

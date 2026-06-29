// ==========================================
// Problem: Search element and break
// Category: break_continue
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(array, target) {
  // TODO: implement
  for (let index = 0; index < array.length; index++) {
    if (array[index] === target) {
      console.log(index, target);
      break;
    }
    console.log(index);
  }
}

solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 21, 23, 4, 556, 34, 2, 3, 4], 21);

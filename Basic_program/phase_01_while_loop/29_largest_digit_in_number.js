// ==========================================
// Problem: Largest digit in number
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  let largest_num = parseInt(num % 10);
  while (num) {
    if (parseInt(num % 10) > largest_num) {
      largest_num = parseInt(num % 10);
    }
    num = parseInt(num / 10);
  }
  console.log(largest_num);
}

solve(765364);

// ==========================================
// Problem: Smallest digit in number
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  let smallest_num = parseInt(num % 10);
  while (num) {
    if (parseInt(num % 10) < smallest_num) {
      smallest_num = parseInt(num % 10);
    }
    num = parseInt(num / 10);
  }
  console.log(smallest_num);
}

solve(823);

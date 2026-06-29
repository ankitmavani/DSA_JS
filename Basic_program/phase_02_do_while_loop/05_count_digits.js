// ==========================================
// Problem: Count digits
// Category: do_while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  let count = 0;
  do {
    num = parseInt(num / 10);
    count++;
  } while (num);
  console.log(count);
  return count;
}

solve(434);

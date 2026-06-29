// ==========================================
// Problem: Reverse number
// Category: do_while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  let rev_num = 0;
  do {
    rev_num = rev_num * 10 + parseInt(num % 10);
    num = parseInt(num / 10);
  } while (num);
  console.log(rev_num);
}

solve(123454321);

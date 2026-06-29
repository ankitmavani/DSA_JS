// ==========================================
// Problem: Multiplication table
// Category: do_while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let index = 1;
  do {
    console.log(`${n}*${index}=${index * n}`);
    index++;
  } while (index <= 10);
}

solve(4);

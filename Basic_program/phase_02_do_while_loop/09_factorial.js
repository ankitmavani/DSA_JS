// ==========================================
// Problem: Factorial
// Category: do_while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  let index = 1;
  let fact = 1;
  do {
    fact *= index;
    index++;
  } while (index <= num);
  console.log(fact);
}

solve(8);

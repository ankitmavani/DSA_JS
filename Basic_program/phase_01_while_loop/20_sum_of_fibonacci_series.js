// ==========================================
// Problem: Sum of Fibonacci series
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(term) {
  // TODO: implement
  let fibo_sum = 0;
  let n0 = 0;
  let n1 = 1;
  let index = 1;
  while (index < term) {
    if (index === 1) fibo_sum += n0;
    if (index === 2) fibo_sum += n1;
    else {
      let curr = n0 + n1;
      fibo_sum += curr;
      n0 = n1;
      n1 = curr;
    }
    index++;
  }
  console.log(fibo_sum);
}

solve(6);

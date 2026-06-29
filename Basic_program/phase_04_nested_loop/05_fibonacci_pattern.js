// ==========================================
// Problem: Fibonacci pattern
// Category: nested_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  for (let index_i = 1; index_i <= n; index_i++) {
    let fibo_ser = '';
    let first = 0;
    let second = 1;
    for (let index = 1; index <= index_i; index++) {
      if (index === 1) {
        fibo_ser += first + ' ';
        continue;
      }
      if (index === 2) {
        fibo_ser += second + ' ';
        continue;
      }
      let third = first + second;
      fibo_ser += third + ' ';
      first = second;
      second = third;
    }
    console.log(fibo_ser);
  }
}

solve(10);

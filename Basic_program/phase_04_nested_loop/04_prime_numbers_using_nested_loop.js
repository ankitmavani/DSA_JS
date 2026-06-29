// ==========================================
// Problem: Prime numbers using nested loop
// Category: nested_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let prime_num = [];
  for (let index = 2; index <= n; index++) {
    let prime = true;
    for (let index_i = 2; index_i <= Math.sqrt(index); index_i++) {
      if (index % index_i === 0) {
        prime = false;
        break;
      }
    }
    if (prime) prime_num.push(index);
  }
  console.log(prime_num);
}

solve(100);

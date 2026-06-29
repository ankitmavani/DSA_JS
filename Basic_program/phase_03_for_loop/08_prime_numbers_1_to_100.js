// ==========================================
// Problem: Prime numbers 1 to 100
// Category: for_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve() {
  // TODO: implement
  let prime_num = [];
  for (let index = 2; index <= 100; index++) {
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

solve();

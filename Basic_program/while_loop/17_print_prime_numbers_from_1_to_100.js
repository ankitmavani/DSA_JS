// ==========================================
// Problem: Print prime numbers from 1 to 100
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve() {
  // TODO: implement
  let index = 1;
  let prime_number = '';
  while (index <= 100) {
    let index_j = 2;
    let prime = false;
    while (index_j * index_j <= index) {
      if (index % index_j === 0) prime = true;
      index_j++;
    }
    if (!prime) {
      prime_number += index;
      prime_number += ' ';
    }
    index++;
  }
  console.log(prime_number);
}

solve();

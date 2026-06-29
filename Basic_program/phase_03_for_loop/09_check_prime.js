// ==========================================
// Problem: Check prime
// Category: for_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let prime = true;
  for (let index_i = 2; index_i <= Math.sqrt(n); index_i++) {
    if (n % index_i === 0) {
      prime = false;
      break;
    }
  }
  console.log(prime);
}

solve(17);

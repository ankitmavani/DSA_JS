// ==========================================
// Problem: Print factors
// Category: for_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let factor_n = [];
  for (let index = 1; index <= Math.sqrt(n); index++) {
    if (n % index === 0) {
      factor_n.push(index);
      if (n % parseInt(n / index) === 0 && n % index !== index) {
        factor_n.push(parseInt(n / index));
      }
    }
  }
  console.log(factor_n);
}

solve(28);

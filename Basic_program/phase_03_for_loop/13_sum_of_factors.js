// ==========================================
// Problem: Sum of factors
// Category: for_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let factor_sum = 0;
  for (let index = 1; index <= Math.sqrt(n); index++) {
    if (n % index === 0) {
      factor_sum += index;
      if (n % parseInt(n / index) === 0 && n % index !== index) {
        factor_sum += parseInt(n / index);
      }
    }
  }
  console.log(factor_sum);
}

solve(28);

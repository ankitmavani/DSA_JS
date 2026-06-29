// ==========================================
// Problem: Harmonic series
// Category: mathematical_series
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

// $$H_n \approx \ln(n) + \gamma$$
function solve(num) {
  // TODO: implement
  let sum = 0;
  for (let index = 1; index <= num; index++) {
    sum += 1 / index;
  }
  console.log(sum);
}

solve(5);

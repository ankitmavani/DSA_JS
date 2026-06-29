// ==========================================
// Problem: Count factors for each number
// Category: nested_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function countFactorGivenNumber(n) {
  let count = 0;
  for (let index = 1; index <= Math.sqrt(n); index++) {
    if (n % index === 0) {
      count++;
      if (n % parseInt(n / index) === 0 && parseInt(n / index) !== index) {
        count++;
      }
    }
  }
  return count;
}

function solve(n) {
  // TODO: implement
  for (let index = 1; index <= n; index++) {
    console.log(`${index} = ${countFactorGivenNumber(index)}`);
  }
}

solve(10);

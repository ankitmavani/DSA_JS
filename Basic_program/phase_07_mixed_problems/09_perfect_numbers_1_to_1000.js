// ==========================================
// Problem: Perfect numbers 1 to 1000
// Category: mixed_problems
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function isPerfectNumber(num) {
  let Perfect_sum = 0;
  for (let index = 1; index <= Math.sqrt(num); index++) {
    if (num % index === 0) {
      Perfect_sum += index;
      if (
        num % parseInt(num / index) === 0 &&
        num / index !== index &&
        num / index !== num
      ) {
        Perfect_sum += num / index;
      }
    }
  }
  return Perfect_sum === num;
}

function solve() {
  // TODO: implement
  for (let index = 1; index <= 1000; index++) {
    if (isPerfectNumber(index)) {
      console.log(index);
    }
  }
}

solve();

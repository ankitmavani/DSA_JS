// ==========================================
// Problem: Find LCM of two numbers
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(a, b) {
  // TODO: implement
  let min = a > b ? a : b;
  while (true) {
    if (min % a === 0 && min % b === 0) {
      console.log(min);
      break;
    }
    min++;
  }
}

function HCF(a, b) {
  // TODO: implement
  let smaller = a < b ? a : b;
  let index = 1;
  let hcf;
  while (index <= smaller) {
    if (a % index === 0 && b % index === 0) {
      hcf = index;
    }
    index++;
  }
  return hcf;
}

function LCMUsingHCF(a, b) {
  console.log((a * b) / HCF(a, b));
}

solve(6, 8);
LCMUsingHCF(18, 24);

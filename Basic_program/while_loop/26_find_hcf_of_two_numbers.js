// ==========================================
// Problem: Find HCF of two numbers
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(a, b) {
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
  console.log(hcf);
}

solve(90, 99);

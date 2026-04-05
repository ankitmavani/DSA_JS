// ==========================================
// Problem: Product of digits of a number
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let product_number = 1;
  while (n) {
    product_number *= n % 10;
    n = parseInt(n / 10);
  }
  console.log(product_number);
}

solve(123450);

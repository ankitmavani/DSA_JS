// ==========================================
// Problem: Sum of all factors
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  let index = 2;
  let sum = 1;
  while (index * index <= num) {
    if (num % index === 0) {
      sum += index;
      if (num / index !== index) {
        sum += num / index;
      }
    }
    index++;
  }
  sum += num;
  console.log(sum);
}

solve(15);

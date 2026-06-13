// ==========================================
// Problem: Check Perfect number
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  let index = 1``;
  let sum = 0;
  while (index < parseInt(num / 2) + 1) {
    if (num % index === 0) sum += index;
    index++;
  }
  if (num === sum) console.log('perfect number');
  else console.log('not perfect');
}

function isPerfect(num) {
  let sum = 1;
  let index = 2;
  while (index * index <= num) {
    if (num % index === 0) {
      sum += index;
      if (num / index !== index) {
        sum += num / index;
      }
    }
    index++;
  }
  if (num === sum) console.log('Perfect Number');
  else console.log('Not Perfect Number');
}

isPerfect(6);
solve(11);

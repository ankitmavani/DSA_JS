// ==========================================
// Problem: Check Strong number
// Category: mathematical_series
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function factorial(num) {
  let fact = 1;
  for (let index = 1; index <= num; index++) {
    fact *= index;
  }
  return fact;
}

function solve(n) {
  // TODO: implement
  let temp = n;
  let strong_num = 0;
  while (temp) {
    strong_num += factorial(temp % 10);
    temp = parseInt(temp / 10);
  }
  console.log(strong_num);
  console.log(strong_num === n);
}

solve(145);

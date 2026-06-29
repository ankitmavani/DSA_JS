// ==========================================
// Problem: Binary numbers with even 1s
// Category: mixed_problems
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function checkBinary(num) {
  let temp = Number(num);
  let count = 0;
  while (temp) {
    if (temp % 10 === 1) {
      count++;
    }
    temp = parseInt(temp / 10);
  }
  // console.log(count)
  return count % 2 === 0;
}

function solve() {
  // TODO: implement
  // let num = 4
  // console.log(checkBinary(num.toString(2)));

  for (let index = 1; index <= 100; index++) {
    if (checkBinary(index.toString(2))) {
      console.log(index);
    }
  }
}

solve();

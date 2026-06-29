// ==========================================
// Problem: Armstrong numbers 1 to 1000
// Category: mixed_problems
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function ArmstrongNumber(num) {
  let len = parseInt(Math.log10(num)) + 1;
  let temp = num;
  let arm_num = 0;
  while (temp) {
    arm_num += Math.pow(temp % 10, len);
    temp = parseInt(temp / 10);
  }
  return arm_num === num;
}

function solve() {
  // TODO: implement
  for (let index = 1; index <= 1000; index++) {
    if (ArmstrongNumber(index)) {
      console.log(index);
    }
  }
}

solve();

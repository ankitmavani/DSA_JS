// ==========================================
// Problem: Palindrome numbers 1 to 500
// Category: mixed_problems
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function isPalindrome(num) {
  let temp = num;
  let rev_num = 0;
  while (temp) {
    rev_num = rev_num * 10 + (temp % 10);
    temp = parseInt(temp / 10);
  }
  return num === rev_num;
}

function solve() {
  // TODO: implement
  for (let index = 1; index <= 500; index++) {
    if (isPalindrome(index)) {
      console.log(index);
    }
  }
}

solve();

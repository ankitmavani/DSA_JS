// ==========================================
// Problem: Check palindrome number
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let temp = n;
  let reverse_number = 0;
  while (temp) {
    reverse_number = reverse_number * 10 + (temp % 10);
    temp = parseInt(temp / 10);
  }
  if (n === reverse_number) console.log('Palindrome number');
  else console.log('Not Palindrome');
}

solve(515);

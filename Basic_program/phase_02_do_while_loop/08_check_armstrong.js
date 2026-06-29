// ==========================================
// Problem: Check Armstrong
// Category: do_while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  let temp = num;
  let digit = parseInt(Math.log10(num)) + 1;
  // console.log(digit);

  let new_num = 0;
  do {
    new_num += Math.pow(parseInt(temp % 10), digit);
    temp = parseInt(temp / 10);
  } while (temp);
  console.log(new_num === num);
}

solve(370);

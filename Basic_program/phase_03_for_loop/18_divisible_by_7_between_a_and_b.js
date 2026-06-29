// ==========================================
// Problem: Divisible by 7 between a and b
// Category: for_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(a, b) {
  // TODO: implement
  let div_arr = [];
  for (let index = a; index <= b; index++) {
    if (index % 7 === 0) {
      div_arr.push(index);
    }
  }
  console.log(div_arr);
}

solve(10, 100);

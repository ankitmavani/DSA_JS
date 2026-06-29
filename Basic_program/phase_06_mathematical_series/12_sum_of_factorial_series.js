// ==========================================
// Problem: Sum of factorial series
// Category: mathematical_series
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  let sum = 0;
  for (let index = 1; index <= num; index++) {
    let facto = 1;
    for (let index_i = 1; index_i <= index; index_i++) {
      facto *= index_i;
    }
    sum += facto;
  }
  console.log(sum);
}

solve(5);

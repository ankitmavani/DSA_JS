// ==========================================
// Problem: Multiplication table from n × 1 to n × 10
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(n) {
  // TODO: implement
  let index = 1
  while(index<=10){
    console.log(`${n} * ${index} = ${index * n}`)
    index++
  }
}

solve(3);

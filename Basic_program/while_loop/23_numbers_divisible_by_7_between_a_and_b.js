// ==========================================
// Problem: Numbers divisible by 7 between a and b
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(a, b) {
  // TODO: implement
  let index = a
  let series = ''
  while(index <= b){
    if(index % 7 === 0){
      series += index + ' '
    }
    index++
  }
  console.log(series)
}

solve(1, 100);

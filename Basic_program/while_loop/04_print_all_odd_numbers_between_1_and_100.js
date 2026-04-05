// ==========================================
// Problem: Print all odd numbers between 1 and 100
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve() {
  // TODO: implement
  let index = 1;
  while(index<=100){
    if(index%2!==0){
      console.log(index)
    }
    index++
  }
}

solve();

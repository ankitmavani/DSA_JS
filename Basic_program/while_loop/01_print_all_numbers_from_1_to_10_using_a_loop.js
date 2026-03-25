// ==========================================
// Problem: Print all numbers from 1 to 10 using a loop
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve() {
  // TODO: implement
  let i = 1;
  let output = '';

  while(i<=10){
    output+=i

    if(i<10) output+=" "
    i++
  }

  console.log(output)
}

solve();

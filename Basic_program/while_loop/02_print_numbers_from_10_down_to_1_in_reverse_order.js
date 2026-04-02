// ==========================================
// Problem: Print numbers from 10 down to 1 in reverse order
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve() {
  // TODO: implement
  let i=10
  let output=''
  while(i>0){
    output+=i
    if(i>1) output+=' '
    i-=1
  }
  console.log(output)
}

solve();

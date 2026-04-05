// ==========================================
// Problem: Check prime number
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  let index = 2
  let prime = false
  while(index * index <= num){
    if(num%index === 0){
      prime = true
      break;
    }
    index++
  }
  if(!prime) console.log("Prime Number")
  else console.log(" not prime");

}

solve(9);

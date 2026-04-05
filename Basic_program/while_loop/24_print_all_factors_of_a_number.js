// ==========================================
// Problem: Print all factors of a number
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  let index = 2
  let factor = '1 '
  while (index * index <= num){
    if(num%index === 0){
      factor+=index + ' '
      if(num/index !== index){
        factor += num/ index +' '
      }
    }
    index++
  }
  factor+=num
  console.log(factor)
}

solve(15);

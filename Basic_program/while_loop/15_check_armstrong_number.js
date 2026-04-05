// ==========================================
// Problem: Check Armstrong number
// Category: while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(num) {
  // TODO: implement
  let arm_number = 0
  temp = num
  let length = parseInt(Math.log10(num)+1)
  while(temp){
    arm_number += Math.pow(temp%10,length)
    temp=parseInt(temp/10)
  }
  if(num===arm_number) console.log("Armstrong number")
  else console.log("Not Armstrong Number")
}

solve(123);

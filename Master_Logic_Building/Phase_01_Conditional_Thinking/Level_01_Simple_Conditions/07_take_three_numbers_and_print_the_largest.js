// =======================================================
// Problem    : Take three numbers and print the largest
// Phase      : Phase_01_Conditional_Thinking
// Level      : Level_01_Simple_Conditions
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(a, b, c) {
  // Write your solution here
  if (a > b && a > c) {
    console.log(a);
  } else if (b > c && b > a) {
    console.log(b);
  } else {
    console.log(c);
  }
}

solve(12, 78, 2);

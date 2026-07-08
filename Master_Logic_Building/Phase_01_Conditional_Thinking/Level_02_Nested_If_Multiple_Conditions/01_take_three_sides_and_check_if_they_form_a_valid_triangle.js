// =======================================================
// Problem    : Take three sides and check if they form a valid triangle
// Phase      : Phase_01_Conditional_Thinking
// Level      : Level_02_Nested_If_Multiple_Conditions
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(a, b, c) {
  // Write your solution here
  if (a <= 0 || b <= 0 || c <= 0) {
    console.log('All side more than 0');
  } else if (a + b > c && b + c > a && c + a > b) {
    console.log('valid');
  } else {
    console.log('invalid');
  }
}

solve(3, 4, 5);
solve(1, 2, 10);
solve(7, 7, 7);
solve(0, 5, 5);

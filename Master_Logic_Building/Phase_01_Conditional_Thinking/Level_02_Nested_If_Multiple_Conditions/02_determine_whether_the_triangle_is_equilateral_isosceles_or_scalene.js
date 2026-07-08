// =======================================================
// Problem    : Determine whether the triangle is equilateral, isosceles, or scalene
// Phase      : Phase_01_Conditional_Thinking
// Level      : Level_02_Nested_If_Multiple_Conditions
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve() {
  // Write your solution here
  if (a === b && a === c) {
    console.log('Equilateral');
  } else if (
    (a === b && b !== c) ||
    (b === c && c !== a) ||
    (c === a && a !== b)
  ) {
    console.log('isosceles');
  } else if (a !== b && b !== c) {
    console.log('scalene');
  } else {
    console.log('triangle');
  }
}

solve();

// =======================================================
// Problem    : Print a pattern of increasing characters (A, AB, ABC...)
// Phase      : Phase_06_Mixed_Logical_Challenges
// Level      : Category_04_Nested_Logic_And_Pattern_Flow
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve() {
  // Write your solution here
  for (let index = 0; index < 5; index++) {
    let str = '';
    for (let index_j = 0; index_j <= index; index_j++) {
      str += String.fromCharCode(65 + index_j);
    }
    console.log(str);
  }
}

solve();

// =======================================================
// Problem    : Find all pairs of characters in a string that are the same using nested loops
// Phase      : Phase_06_Mixed_Logical_Challenges
// Level      : Category_04_Nested_Logic_And_Pattern_Flow
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        console.log(`Character '${str[i]}' found at indices (${i}, ${j})`);
      }
    }
  }
}

solve('banana');

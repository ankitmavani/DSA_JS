// =======================================================
// Problem    : Remove duplicate words from a sentence
// Phase      : Phase_06_Mixed_Logical_Challenges
// Level      : Category_02_String_And_Logic_Mix
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let str_arr = str.split(' ');
  console.log(str_arr);
  let set = new Set(str_arr);
  console.log([...set].join(' '));
}

solve('this is is a test test sentence');

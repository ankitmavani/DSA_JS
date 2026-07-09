// =======================================================
// Problem    : Check if two strings are rotations of each other
// Phase      : Phase_06_Mixed_Logical_Challenges
// Level      : Category_02_String_And_Logic_Mix
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str1, str2) {
  // Write your solution here
  let double_str = str1 + str1;
  for (let index = 0; index <= double_str.length - str2.length; index++) {
    let index_j = 0;
    while (
      index_j < str2.length &&
      str2[index_j] === double_str[index + index_j]
    ) {
      index_j++;
    }
    if (index_j === str2.length) {
      return true;
    }
  }
  return false;
}

console.log(solve('abcd', 'cdab')); // true
console.log(solve('abcd', 'acbd')); // false

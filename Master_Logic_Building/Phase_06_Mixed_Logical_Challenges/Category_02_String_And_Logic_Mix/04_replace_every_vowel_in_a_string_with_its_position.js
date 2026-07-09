// =======================================================
// Problem    : Replace every vowel in a string with its position
// Phase      : Phase_06_Mixed_Logical_Challenges
// Level      : Category_02_String_And_Logic_Mix
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let result = '';
  for (let index_j = 0; index_j < str.length; index_j++) {
    if (
      str[index_j] === 'a' ||
      str[index_j] === 'A' ||
      str[index_j] === 'e' ||
      str[index_j] === 'E' ||
      str[index_j] === 'i' ||
      str[index_j] === 'I' ||
      str[index_j] === 'o' ||
      str[index_j] === 'O' ||
      str[index_j] === 'u' ||
      str[index_j] === 'U'
    ) {
      result += index_j;
    } else {
      result += str[index_j];
    }
  }
  console.log(result);
}

solve('hello wolrd');

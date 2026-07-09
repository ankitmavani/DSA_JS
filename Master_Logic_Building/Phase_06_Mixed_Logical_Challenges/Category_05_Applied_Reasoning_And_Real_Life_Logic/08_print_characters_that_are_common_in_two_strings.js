// =======================================================
// Problem    : Print characters that are common in two strings
// Phase      : Phase_06_Mixed_Logical_Challenges
// Level      : Category_05_Applied_Reasoning_And_Real_Life_Logic
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str1, str2) {
  // Write your solution here
  let result = '';
  for (let index = 0; index < str1.length; index++) {
    let alreadyAdded = false;

    for (let index_j = 0; index_j < result.length; index_j++) {
      if (str1[index] === result[index_j]) {
        alreadyAdded = true;
        break;
      }
    }

    if (alreadyAdded) {
      continue;
    }

    for (let index_k = 0; index_k < str2.length; index_k++) {
      if (str1[index] === str2[index_k]) {
        result += str1[index];
        break;
      }
    }
  }
  console.log(result);
}

solve('banana', 'applenab');
solve('banana', 'applenab'); // ban
solve('hello', 'world'); // lo
solve('abcd', 'efgh'); // ""
solve('abc', 'abc'); // abc
solve('aabbcc', 'bbccdd'); // bc

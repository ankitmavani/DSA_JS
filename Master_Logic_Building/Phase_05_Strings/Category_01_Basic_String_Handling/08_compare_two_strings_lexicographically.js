// =======================================================
// Problem    : Compare two strings lexicographically
// Phase      : Phase_05_Strings
// Level      : Category_01_Basic_String_Handling
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str1, str2) {
  // Write your solution here
  let min_len = Math.min(str1.length, str2.length);
  let result = 0;
  for (let index = 0; index < min_len; index++) {
    if (str1.charCodeAt(index) > str2.charCodeAt(index)) {
      result = 1;
    } else if (str1.charCodeAt(index) < str2.charCodeAt(index)) {
      result = -1;
    }
  }
  if (result === 0) {
    if (str1.length > str2.length) {
      result = 1;
    } else if (str1.length < str2.length) {
      result = -1;
    }
  }

  if (result === 0) {
    console.log('both same');
  } else if (result === -1) {
    console.log(str2 + 'before' + str1);
  } else {
    console.log(str1 + 'before' + str2);
  }
}

solve('apple', 'banana');
solve('cat', 'car');
solve('abc', 'abc');
solve('abc', 'abcd');

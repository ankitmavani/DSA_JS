// =======================================================
// Problem    : Check if two strings are anagrams without using collections
// Phase      : Phase_06_Mixed_Logical_Challenges
// Level      : Category_02_String_And_Logic_Mix
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str1, str2) {
  // Write your solution here
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
    console.log('not anagrams');
    return;
  }

  let arr = new Array(26).fill(0);

  for (let index = 0; index < str1.length; index++) {
    arr[str1.charCodeAt(index) - 97]++;
    arr[str2.charCodeAt(index) - 97]--;
  }

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== 0) {
      console.log('not anagram');
      return;
    }
  }
  console.log('anagram');
}

solve('hello', 'olleh');
solve('hello', 'world');
solve('listen', 'silent');

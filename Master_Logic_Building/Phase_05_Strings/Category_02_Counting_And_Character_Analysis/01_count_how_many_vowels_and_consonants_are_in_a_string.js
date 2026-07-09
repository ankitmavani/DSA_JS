// =======================================================
// Problem    : Count how many vowels and consonants are in a string
// Phase      : Phase_05_Strings
// Level      : Category_02_Counting_And_Character_Analysis
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let vowels_count = 0;
  let consonants_count = 0;
  for (let index = 0; index < str.length; index++) {
    if (
      str[index] === 'a' ||
      str[index] === 'A' ||
      str[index] === 'e' ||
      str[index] === 'E' ||
      str[index] === 'i' ||
      str[index] === 'I' ||
      str[index] === 'o' ||
      str[index] === 'O' ||
      str[index] === 'u' ||
      str[index] === 'U'
    ) {
      vowels_count++;
    } else if (
      (str.charCodeAt(index) >= 65 && str.charCodeAt(index) <= 90) ||
      (str.charCodeAt(index) >= 97 && str.charCodeAt(index) <= 122)
    ) {
      consonants_count++;
    }
  }
  console.log(vowels_count, consonants_count);
}

solve('hello world!');

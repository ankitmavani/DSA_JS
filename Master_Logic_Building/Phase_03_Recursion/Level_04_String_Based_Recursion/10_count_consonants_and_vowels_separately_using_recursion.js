// =======================================================
// Problem    : Count consonants and vowels separately using recursion
// Phase      : Phase_03_Recursion
// Level      : Level_04_String_Based_Recursion
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str, index = 0, vowels = 0, consonants = 0) {
  // Write your solution here
  if (index === str.length) {
    return { vowels, consonants };
  }

  const ch = str[index].toLowerCase();

  if (ch >= 'a' && ch <= 'z') {
    if ('aeiou'.includes(ch)) {
      vowels++;
    } else {
      consonants++;
    }
  }

  return solve(str, index + 1, vowels, consonants);
}

console.log(solve('OpenAI'));

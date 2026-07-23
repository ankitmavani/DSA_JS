// ==========================================
// Problem: Count consonants
// Category: phase_05_string_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function countConsonants(str, index = 0) {
  if (index === str.length) {
    return 0;
  }

  let ch = str[index].toLowerCase();

  if (
    ch >= 'a' &&
    ch <= 'z' &&
    ch !== 'a' &&
    ch !== 'e' &&
    ch !== 'i' &&
    ch !== 'o' &&
    ch !== 'u'
  ) {
    return 1 + countConsonants(str, index + 1);
  }

  return countConsonants(str, index + 1);
}

console.log(countConsonants('HELLO')); // 3
console.log(countConsonants('ChatGPT')); // 6
console.log(countConsonants('Recursion')); // 5

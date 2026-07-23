// ==========================================
// Problem: Count vowels
// Category: phase_05_string_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function countVowels(str, index = 0) {
  if (index === str.length) {
    return 0;
  }

  let ch = str[index].toLowerCase();

  if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
    return 1 + countVowels(str, index + 1);
  }

  return countVowels(str, index + 1);
}

console.log(countVowels('HELLO')); // 2
console.log(countVowels('ChatGPT')); // 1
console.log(countVowels('Recursion')); // 4

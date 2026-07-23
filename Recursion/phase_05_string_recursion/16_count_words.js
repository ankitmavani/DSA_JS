// ==========================================
// Problem: Count words
// Category: phase_05_string_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function countWords(str, index = 0, isWord = false) {
  // TODO: implement
  if (str.length === index) {
    return isWord ? 1 : 0;
  }
  if (str[index] === ' ' && isWord) {
    return 1 + countWords(str, index + 1, false);
  }
  if (str[index] === ' ') {
    return countWords(str, index + 1, false);
  }
  return countWords(str, index + 1, true);
}

console.log(countWords('Hello World')); // 2
console.log(countWords('I Love Recursion')); // 3
console.log(countWords('ChatGPT')); // 1
console.log(countWords('  Hello   World  ')); // 2

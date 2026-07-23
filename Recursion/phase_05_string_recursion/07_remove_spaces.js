// ==========================================
// Problem: Remove spaces
// Category: phase_05_string_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function removeSpaces(str, index = 0) {
  if (index === str.length) {
    return '';
  }

  if (str[index] === ' ') {
    return removeSpaces(str, index + 1);
  }

  return str[index] + removeSpaces(str, index + 1);
}

console.log(removeSpaces('Hello World')); // HelloWorld
console.log(removeSpaces('A B C D')); // ABCD
console.log(removeSpaces(' Chat GPT ')); // ChatGPT
console.log(removeSpaces('NoSpaces')); // NoSpaces

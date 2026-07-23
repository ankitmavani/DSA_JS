// ==========================================
// Problem: Anagram check
// Category: phase_05_string_recursion
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function fillFrequency(str, freq, index, value) {
  if (str.length === index) {
    // console.log(freq)
    return freq;
  }
  // console.log(str.charCodeAt(index))
  freq[str.charCodeAt(index) - 97] = freq[str.charCodeAt(index) - 97] + value;
  return fillFrequency(str, freq, index + 1, value);
}

function check(freq, index = 0) {
  if (index >= 26) {
    return true;
  }
  if (freq[index] !== 0) {
    return false;
  }
  return check(freq, index + 1);
}

function solve(str1, str2) {
  // TODO: implement
  let freq = new Array(26).fill(0);

  freq = fillFrequency(str1, freq, 0, 1);
  freq = fillFrequency(str2, freq, 0, -1);

  return check(freq);
}

console.log(solve('listen', 'silent')); // true
console.log(solve('race', 'care')); // true
console.log(solve('hello', 'world')); // false
console.log(solve('abc', 'cab')); // true
console.log(solve('abc', 'ab')); // false

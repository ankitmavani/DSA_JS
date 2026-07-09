// =======================================================
// Problem    : Print how many words start with a vowel in a sentence
// Phase      : Phase_05_Strings
// Level      : Category_02_Counting_And_Character_Analysis
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let count = 0;
  let last_str = false;
  let update_last = true;
  for (let index = 0; index < str.length; index++) {
    if (str[index] === ' ') {
      update_last = true;
    }
    if (str[index] === ' ' && last_str) {
      count++;
      last_str = false;
    } else if (str[index] !== ' ' && update_last) {
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
        last_str = true;
      }
      update_last = false;
    }
  }
  if (last_str) {
    count++;
  }
  console.log(count);
}

solve('this is a number and apple for eat'); // 4
solve('apple orange umbrella'); // 3
solve('Apple Orange Umbrella'); // 3 (case-insensitive)
solve('this is an example'); // 3
solve('cat dog fish'); // 0
solve('a e i o u'); // 5
solve('A E I O U'); // 5
solve('one two three four'); // 1
solve('umbrella is open'); // 3
solve('eat an orange every day'); // 4
solve('hello'); // 0
solve('apple'); // 1
solve(''); // 0
solve('     '); // 0
solve('india is our amazing country'); // 4
solve('sky fly cry'); // 0
solve('owl eagle ant ink'); // 4
solve('Ankit is an engineer'); // 4
solve('book apple egg orange'); // 3
solve('up under over inside'); // 4

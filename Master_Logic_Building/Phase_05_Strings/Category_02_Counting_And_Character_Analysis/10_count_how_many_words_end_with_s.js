// =======================================================
// Problem    : Count how many words end with 's'
// Phase      : Phase_05_Strings
// Level      : Category_02_Counting_And_Character_Analysis
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let count = 0;
  let last_char = false;
  for (let index = 0; index < str.length; index++) {
    if (str[index] === ' ' && last_char) {
      count++;
      last_char = false;
    } else if (str[index] === 's') {
      last_char = true;
    } else {
      last_char = false;
    }
  }
  if (last_char) {
    count++;
  }
  console.log(count);
}

solve('abds daf asdfs asdfas df sdf fasd');
solve('This is a test');
solve('Dogs Cats Birds');
solve('I love apples and bananas');

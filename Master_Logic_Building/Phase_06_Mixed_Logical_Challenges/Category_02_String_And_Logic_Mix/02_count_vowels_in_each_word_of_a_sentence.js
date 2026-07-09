// =======================================================
// Problem    : Count vowels in each word of a sentence
// Phase      : Phase_06_Mixed_Logical_Challenges
// Level      : Category_02_String_And_Logic_Mix
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let str_arr = str.split(' ');
  let arr = [];
  for (let index = 0; index < str_arr.length; index++) {
    let count = 0;
    for (let index_j = 0; index_j < str_arr[index].length; index_j++) {
      if (
        str[index_j] === 'a' ||
        str[index_j] === 'A' ||
        str[index_j] === 'e' ||
        str[index_j] === 'E' ||
        str[index_j] === 'i' ||
        str[index_j] === 'I' ||
        str[index_j] === 'o' ||
        str[index_j] === 'O' ||
        str[index_j] === 'u' ||
        str[index_j] === 'U'
      ) {
        count++;
      }
    }
    arr.push(count);
  }

  for (let index = 0; index < str_arr.length; index++) {
    console.log(`${str_arr[index]} : ${arr[index]}`);
  }
}

solve('hello world');

// =======================================================
// Problem    : Reverse words in a string if their length is even
// Phase      : Phase_06_Mixed_Logical_Challenges
// Level      : Category_02_String_And_Logic_Mix
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let str_arr = str.split(' ');
  for (let index = 0; index < str_arr.length; index++) {
    if (str_arr[index].length % 2 === 0) {
      str_arr[index] = str_arr[index].split('').reverse().join('');
    }
  }
  console.log(str_arr.join(' '));
}

solve('This is my world and my Rules');

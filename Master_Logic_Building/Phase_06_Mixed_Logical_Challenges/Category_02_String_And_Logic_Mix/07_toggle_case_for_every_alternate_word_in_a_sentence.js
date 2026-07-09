// =======================================================
// Problem    : Toggle case for every alternate word in a sentence
// Phase      : Phase_06_Mixed_Logical_Challenges
// Level      : Category_02_String_And_Logic_Mix
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str) {
  // Write your solution here
  let str_arr = str.split(' ');
  for (let index = 0; index < str_arr.length; index += 2) {
    let result = str_arr[index];
    let str2 = '';
    // console.log(result)
    for (let index_j = 0; index_j < str_arr[index].length; index_j++) {
      if (result[index_j] >= 'a' && result[index_j] <= 'z') {
        str2 += String.fromCharCode(result.charCodeAt(index_j) - 32);
      } else if (result[index_j] >= 'A' && result[index_j] <= 'Z') {
        str2 += String.fromCharCode(result.charCodeAt(index_j) + 32);
      }
    }
    str_arr[index] = str2;
  }
  console.log(str_arr.join(' '));
}

solve('Hello World JavaScript Is Awesome');

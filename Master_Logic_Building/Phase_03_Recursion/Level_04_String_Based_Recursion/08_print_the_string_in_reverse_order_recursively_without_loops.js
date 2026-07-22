// =======================================================
// Problem    : Print the string in reverse order recursively (without loops)
// Phase      : Phase_03_Recursion
// Level      : Level_04_String_Based_Recursion
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str, index = str.length - 1) {
  // Write your solution here
  if (index < 0) return;
  console.log(str[index]);
  return solve(str, index - 1);
}

solve('hello');

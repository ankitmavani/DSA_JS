// =======================================================
// Problem    : Print all characters of a string one by one recursively
// Phase      : Phase_03_Recursion
// Level      : Level_04_String_Based_Recursion
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(str, index = 0) {
  // Write your solution here
  if (str.length === index) return;
  console.log(str[index]);
  return solve(str, index + 1);
}

solve('CHAT');

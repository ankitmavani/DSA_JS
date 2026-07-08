// =======================================================
// Problem    : Take time (hours and minutes) and print the smaller angle between clock hands
// Phase      : Phase_01_Conditional_Thinking
// Level      : Level_05_Creative_Tricky_Logical_Scenarios
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(hours, minutes) {
  // Write your solution here
  min_angles = minutes * 6;
  hours_angles = hours * 30;

  angle =
    min_angles > hours_angles
      ? min_angles - hours_angles
      : hours_angles - min_angles;
  angle_2 = 360 - angle;
  // console.log(angle, angle_2)
  console.log(Math.min(angle, angle_2));
}

solve(6, 30);
solve(6, 30);
solve(6, 30);
solve(6, 50);
solve(11, 30);
solve(9, 10);

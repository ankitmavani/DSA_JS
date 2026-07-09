// =======================================================
// Problem    : Count how many times a coin lands on heads or tails using random
// Phase      : Phase_06_Mixed_Logical_Challenges
// Level      : Category_05_Applied_Reasoning_And_Real_Life_Logic
// Difficulty : Easy
// Status     : ✅ Solved
// =======================================================

function solve(n) {
  // Write your solution here
  let heads = 0;
  let tails = 0;

  for (let i = 1; i <= n; i++) {
    let toss = Math.floor(Math.random() * 2);

    if (toss === 0) {
      console.log(`Toss ${i}: Heads`);
      heads++;
    } else {
      console.log(`Toss ${i}: Tails`);
      tails++;
    }
  }

  console.log('\nHeads =', heads);
  console.log('Tails =', tails);
}

solve(10);

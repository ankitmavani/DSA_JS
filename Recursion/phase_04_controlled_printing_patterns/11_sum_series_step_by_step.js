// ==========================================
// Problem: Sum series step by step
// Category: phase_04_controlled_printing_patterns
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function sumSeries(n, sum = 0, current = 1) {
  if (current > n) {
    return;
  }

  if (current === 1) {
    console.log(1);
    sum = 1;
  } else {
    console.log(`${sum} + ${current} = ${sum + current}`);
    sum += current;
  }

  sumSeries(n, sum, current + 1);
}

sumSeries(5);

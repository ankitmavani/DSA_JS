// ==========================================
// Problem: Tables from 1 to n
// Category: phase_04_controlled_printing_patterns
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function printTable(num, i = 1) {
  if (i > 10) {
    return;
  }

  console.log(`${num} x ${i} = ${num * i}`);
  printTable(num, i + 1);
}

function printTables(n, current = 1) {
  if (current > n) {
    return;
  }

  printTable(current);
  console.log();

  printTables(n, current + 1);
}

printTables(5);

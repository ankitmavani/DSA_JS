// ==========================================
// Problem: Multiplication tables from 1 to 10
// Category: nested_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve() {
  // TODO: implement
  for (let index_i = 1; index_i <= 10; index_i++) {
    console.log(`>>>>>>${index_i}>>>>>>>`);
    for (let index = 1; index <= 10; index++) {
      console.log(`${index_i}*${index}=${index_i * index}`);
    }
  }
}

solve();

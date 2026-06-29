// ==========================================
// Problem: Find LCM
// Category: for_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(a, b) {
  // TODO: implement
  let min = a < b ? a : b;
  let hcf_num = 1;
  for (let index = 1; index <= Math.sqrt(min); index++) {
    if (a % index === 0 && b % index === 0) {
      hcf_num = Math.max(hcf_num, index);
      if (a % parseInt(min / index) === 0 && b % parseInt(min / index) === 0) {
        hcf_num = Math.max(hcf_num, parseInt(min / index));
      }
    }
  }
  return hcf_num;
}

function solveLCM(a, b) {
  console.log((a * b) / parseInt(solve(a, b)));
}

solveLCM(12, 18);

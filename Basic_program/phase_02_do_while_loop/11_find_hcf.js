// ==========================================
// Problem: Find HCF
// Category: do_while_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function solve(a, b) {
  // TODO: implement
  let min_val = a < b ? a : b;
  let index = 1;
  let hcf_num = 1;
  do {
    if (a % index === 0 && b % index === 0) {
      hcf_num = Math.max(index, hcf_num);
      let sub_val = parseInt(min_val / index);
      if (a % sub_val === 0 && b % sub_val === 0) {
        hcf_num = Math.max(sub_val, hcf_num);
      }
    }

    index++;
  } while (index <= Math.sqrt(min_val));
  console.log(hcf_num);
}

solve(12, 18);

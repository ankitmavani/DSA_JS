// ==========================================
// Problem: Pythagorean triplets
// Category: nested_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

// function solve(n) {
//   // TODO: implement
//   for (let index_i = 1; index_i <= n; index_i++) {
//     for (let index_j = index_i+1; index_j <= n; index_j++) {
//       for (let index_k = index_j+1; index_k <= n; index_k++) {
//         if(index_i*index_i+index_j*index_j===index_k*index_k){
//           console.log(index_i, index_j, index_k)
//         }
//       }
//     }
//   }
// }

function solve(n) {
  // TODO: implement
  for (let index_i = 1; index_i <= n; index_i++) {
    for (let index_j = index_i + 1; index_j <= n; index_j++) {
      let cSq = index_i * index_i + index_j * index_j;
      let cSqrt = Math.sqrt(cSq);
      if (Number.isInteger(cSqrt) && cSqrt <= n) {
        console.log(index_i, index_j, cSqrt);
      }
    }
  }
}

solve(15);

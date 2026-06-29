// ==========================================
// Problem: Matrix row and column sum
// Category: nested_loop
// Difficulty: Easy
// Status: ✅ Solved
// ==========================================

function printMatrix(matrix) {
  for (let index_i = 0; index_i < matrix.length; index_i++) {
    for (let index_j = 0; index_j < matrix[0].length; index_j++) {
      console.log(matrix[index_i][index_j]);
    }
  }
}

function printSum(matrix) {
  for (let index_i = 0; index_i < matrix.length; index_i++) {
    let sumCol = 0;
    let sumRow = 0;
    for (let index_j = 0; index_j < matrix[0].length; index_j++) {
      sumRow += matrix[index_i][index_j];
      sumCol += matrix[index_j][index_i];
    }
    console.log(index_i, sumRow, sumCol);
  }
}

function solve(matrix) {
  // TODO: implement
  printMatrix(matrix);
  printSum(matrix);
}

solve([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

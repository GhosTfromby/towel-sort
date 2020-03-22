
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let matr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0 ) {
      matr.push(matrix[i].reverse());
    } else {
      matr.push(matrix[i]);
    }
  }
  return matr.reduce((acc, val) => acc.concat(val), []);
}

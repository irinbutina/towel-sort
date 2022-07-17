
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                i % 2  ? arr.push(matrix[i][matrix[i].length - 1 - j]) : arr.push(matrix[i][j]);
            }
        }
    }  
  return arr;
}

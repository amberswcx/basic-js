const {NotImplementedError} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const resultMatrix = [];

  for (let i = 0; i < rows; i++) {
    resultMatrix.push([]);

    for (let j = 0; j < columns; j++) {
      if (matrix[i][j]) {
        resultMatrix[i].push(1);
      } else {
        resultMatrix[i].push(0);
        if (i - 1 >= 0) {
          if (matrix[i - 1][j]) resultMatrix[i][j]++;

          if (j - 1 >= 0) {
            if (matrix[i - 1][j - 1]) resultMatrix[i][j]++;
          }

          if (j + 1 < columns) {
            if (matrix[i - 1][j + 1]) resultMatrix[i][j]++;
          }
        }

        if (i + 1 < rows) {
          if (matrix[i + 1][j]) resultMatrix[i][j]++;

          if (j - 1 >= 0) {
            if (matrix[i + 1][j - 1]) resultMatrix[i][j]++;
          }

          if (j + 1 < columns) {
            if (matrix[i + 1][j + 1]) resultMatrix[i][j]++;
          }
        }

        if (j - 1 >= 0) {
          if (matrix[i][j - 1]) resultMatrix[i][j]++;
        }

        if (j + 1 < columns) {
          if (matrix[i][j + 1]) resultMatrix[i][j]++;
        }

      }
    }
  }

  return resultMatrix;
}

module.exports = {
  minesweeper
};

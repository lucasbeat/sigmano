const dnaTraversal = matrix => {
    const vertical = [];
    const diagonalsLeftToRight = [];
    const diagonalsRightToLeft = [];
  
    for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < matrix[row].length; column++) {
        vertical.push(matrix[column][row]);
      }
  
      const diagonalLeftBottom = [];
      const diagonalRightTop = [];
      const diagonalRightBottom = [];
      const diagonalLeftTop = [];
  
      for (let j = 0; j < matrix.length - row; j++) {
        diagonalLeftBottom.push(matrix[row + j][j]);
        diagonalRightTop.push(matrix[j][row + j]);
  
        diagonalRightBottom.push(matrix[row + j][matrix.length - 1 - j]);
        diagonalLeftTop.push(matrix[j][matrix.length - 1 - (row + j)]);
      }
  
      diagonalsLeftToRight.push(diagonalLeftBottom, diagonalRightTop);
      diagonalsRightToLeft.push(diagonalRightBottom, diagonalLeftTop);
    }
  
    return { vertical, diagonalsLeftToRight, diagonalsRightToLeft };
  };
  
  module.exports = { dnaTraversal };
  
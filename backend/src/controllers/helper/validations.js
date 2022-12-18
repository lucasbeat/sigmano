const { dnaTraversal } = require("./dnaTraversal");
const { dnaArrayToMatrix } = require("../../util/util");

const validateSequence = dna => {
  let hasSameLetterInSequence = false;

  for (var i = 0; i < dna.length; i++) {
    for (var j = 0; j < dna[i].length; j++) {
      if (
        dna[i][j] === dna[i][j + 1] &&
        dna[i][j] === dna[i][j + 2] &&
        dna[i][j] === dna[i][j + 3]
      ) {
        hasSameLetterInSequence = true;
      }
    }
  }
  return hasSameLetterInSequence;
};

const chunkArrayToMatrix = array => {
  const size = Math.sqrt(array.length);
  const matrix = [];

  for (let i = 0; i < array.length; i += size) {
    matrix.push(array.slice(i, i + size));
  }

  return matrix;
};

const validateDna = dna => {
  const matrix = dnaArrayToMatrix(dna);

  const { vertical, diagonalsLeftToRight, diagonalsRightToLeft } = dnaTraversal(matrix);

  const verticalArrayToMatrix = chunkArrayToMatrix(vertical);

  if (
    validateSequence([
      ...verticalArrayToMatrix,
      ...matrix,
      ...diagonalsLeftToRight,
      ...diagonalsRightToLeft,
    ])
  ) {
    return true;
  }

  return false;
};

module.exports = { validateDna };

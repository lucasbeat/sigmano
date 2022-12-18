const { toUpperCaseString } = require("../../util/util");

const checkIsAnArrayOfStrings = dna => {
  for (let i = 0; i < dna.length; i++) {
    if (typeof dna[i] != "string") {
      return false;
    }
  }
  return true;
};

const checkDnaString = dna => {
  const upperCaseStringsInArray = toUpperCaseString(dna);

  const validator = upperCaseStringsInArray.every((sequence) => {
    return /^[ATGC]+$/.test(sequence);
  });

  return validator ? validator : false;
};

const isNxN = dna => {
  for (let i = 0; i < dna.length; i++) {
    if (dna[i].length !== dna.length) {
      return false;
    }
  }
  return true;
};

module.exports = {
  isNxN,
  checkDnaString,
  checkIsAnArrayOfStrings,
};

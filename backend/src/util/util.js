const dnaArrayToMatrix = dna => dna.map((dna) => dna.split(""));
const toUpperCaseString = dna => dna.map((dna) => dna.toUpperCase());
const checkIsValidArray = dna => Array.isArray(dna);

module.exports = { dnaArrayToMatrix, toUpperCaseString, checkIsValidArray };
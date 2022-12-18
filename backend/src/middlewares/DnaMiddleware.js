const {
    isNxN,
    checkDnaString,
    checkIsAnArrayOfStrings,
  } = require("./helper/middlewareHelper");
  const { checkIsValidArray } = require("../util/util");
  
  const DnaMiddleware = (req, res, next) => {
    const { dna } = req.body;
  
    if (!dna) {
      return res.status(400).json({
        error: true,
        message:
          "Invalid data name! The name must be send through the body as 'dna'!",
      });
    }
  
    const checkArray = checkIsValidArray(dna);
    const isArrayStrings = checkIsAnArrayOfStrings(dna);
  
    if (!isArrayStrings || !checkArray) {
      return res.status(400).json({
        error: true,
        message: "The dna sequence must be an array of strings!",
      });
    }
  
    const validateNxN = isNxN(dna);
    if (!validateNxN) {
      return res.status(400).json({
        error: true,
        message: "The array must be NxN!",
      });
    }
  
    const validateDnaSequence = checkDnaString(dna);
    if (!validateDnaSequence) {
      return res.status(400).json({
        error: true,
        message: "The dna sequence must have only the letters (A, T, C, G)!",
      });
    }
  
    next();
  };
  
  module.exports = DnaMiddleware;
  
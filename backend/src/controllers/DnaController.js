const { validateDna } = require("./helper/validations");
const Dna = require("../models/Dna");

module.exports = {
  async PostDna(req, res) {
    const { dna } = req.body;

    const dnaSequenceExists = await Dna.findOne({
      dnaSequence: dna,
    });

    if (dnaSequenceExists) {
      const { result } = dnaSequenceExists;

      return res.status(200).json({ message: "Dna already tested!", result });
    }

    try {
      const isSigmano = validateDna(dna);

      if (!isSigmano) {
        await Dna.create({
          dnaSequence: dna,
          result: "Human",
        });

        return res.status(200).json({ result: "Human" });
      }

      await Dna.create({
        dnaSequence: dna,
        result: "Sigmano",
      });

      return res.status(200).json({ result: "Sigmano" });
    } catch (err) {
      console.error(err);

      return res
        .status(500)
        .json({ error: true, message: "Internal server error!" });
    }
  },
};

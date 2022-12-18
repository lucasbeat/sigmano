const { default: mongoose } = require("mongoose");

const Dna = mongoose.model("Dna", {
  dnaSequence: {
    type: Array,
    default: [],
  },
  result: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Dna;
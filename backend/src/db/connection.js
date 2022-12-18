require("dotenv");
const mongoose = require("mongoose");

// Necessário colocar no arquivo .env a url de conexão com o mongo
mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => {
    console.log("connected to database!");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
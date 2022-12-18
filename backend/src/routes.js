const express = require("express");
const routes = express.Router();

const DnaMiddleware = require("./middlewares/DnaMiddleware");

const DnaController = require("./controllers/DnaController");

routes.post("/", DnaMiddleware, DnaController.PostDna);

module.exports = routes;
const { model } = require("mongoose");

const {PositionsSchema} = require("../Schemas/PositionsSchema.js");

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel};
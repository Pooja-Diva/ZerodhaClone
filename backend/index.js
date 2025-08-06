require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const {HoldingsModel} = require("./model/HoldingsModel");
const {PositionsModel} = require("./model/PositionsModel.js");
const {OrdersModel} = require("./model/OrdersModel.js");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(bodyParser.json()); 
app.use(cors({
  origin: [
    "https://zerodhaclone-1-wglg.onrender.com",
    "https://zerodhaclone-2-06kt.onrender.com",
  ],
  credentials: true
}));

app.get("/allHoldings", async(req,res) => {
   let allHoldings = await HoldingsModel.find({});
   res.json(allHoldings);
});

app.get("/allPositions", async(req,res) => {
   let allPositions = await PositionsModel.find({});
   res.json(allPositions);
});

app.get("/", (req, res) => {
  res.send("Backend is live");
});

app.post("/newOrder", async(req,res) => {
  let newOrder = new OrdersModel ({
    name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode,
  });
  newOrder.save();
  res.send("Order saved!");
});

app.listen(PORT, () => {
 console.log("App started!");
 mongoose.connect(uri);
 console.log("DB connected!");
});

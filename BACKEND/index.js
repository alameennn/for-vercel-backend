const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const foodRouter = require("./Routes/Foods");
const path = require("path");



const app = express();

const _dirname = path.resolve()

app.use(cors()); // Enable CORS for all routes

// body parser
app.use(express.json()); // middleware to pass JSON
app.use(express.static(path.resolve(__dirname, "dist")));
app.use("/foods", foodRouter.routes);
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

// i have removed process.env.PORT

app.use(express.static(path.join(_dirname,"FRONTEND/dist")))

app.listen(3000, () => {
  console.log("Server is running at 3000");
});

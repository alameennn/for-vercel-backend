const express = require("express");
require("dotenv").config();
const cors = require("cors");
const foodRouter = require("./Routes/Foods");
const path = require("path");
const app = express();


app.use(cors()); // Enable CORS for all routes

// body parser
app.use(express.json()); // middleware to pass JSON
app.use(express.static("public"));
app.use("/foods", foodRouter.routes);


app.listen(3000, () => {
  console.log("Server is running at 3000");
});

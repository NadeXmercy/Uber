const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectdb = require("./DB/db");
const app = express();
const connectTodb = require("./DB/db");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");

connectTodb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("kya Haal chaal");
});

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);


module.exports = app;
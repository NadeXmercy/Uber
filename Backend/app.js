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
const corsOptions = {
  origin: 'http://localhost:5173',  // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,  // Allow credentials (cookies)
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("kya Haal chaal");
});

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);


module.exports = app;
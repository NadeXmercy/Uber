const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const connectdb = require("./DB/db");
const app = express();
const connectTodb = require('./DB/db')
connectTodb();

app.use(cors());
app.get("/", (req, res) => {
    res.send("kya Haal chaal")
    
})


module.exports = app;
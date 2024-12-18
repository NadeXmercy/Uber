const mongoose = require("mongoose");

function connectdb() {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("db connect succesfully");
    })
    .catch((err) => console.log(err));
}

module.exports = connectdb;

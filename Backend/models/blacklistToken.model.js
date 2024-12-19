const mongoose = require("mongoose");
// const { create } = require("./user.models");

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400,
  },
});

module.exports = mongoose.model("blacklist", blacklistTokenSchema);

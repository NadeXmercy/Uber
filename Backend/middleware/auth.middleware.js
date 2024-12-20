const userModel = require("../models/user.models");
const jwt = require("jsonwebtoken");
const captainModel = require("../models/captain.model");
const blacklistedTokenModel = require("../models/blacklistToken.model");

module.exports.authuser = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    const isblacklisted = await blacklistedTokenModel.findOne({ token: token });
    if (isblacklisted) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Token is blacklisted" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    req.user = user; // Attach the user object to the request
    next();
  } catch (error) {
    console.error("Authentication error:", error.message);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    const isblacklisted = await blacklistedTokenModel.findOne({ token: token });
    console.log(isblacklisted);
    if (isblacklisted) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Token is blacklisted" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);

    if (!captain) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    req.captain = captain; // Attach the user object to the request
    next();
  } catch (error) {
    console.error("Authentication error:", error.message);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
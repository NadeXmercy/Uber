const jwt = require("jsonwebtoken");
const userModel = require("../models/user.models");
const captainModel = require("../models/captain.model");
const blacklistedTokenModel = require("../models/blacklistToken.model");

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      throw new Error("Token expired");
    } else if (error.name === "JsonWebTokenError") {
      throw new Error("Invalid token");
    }
    throw new Error("Token verification failed");
  }
};

module.exports.authuser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = req.cookies.token || (authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null);

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    // Check if the token is blacklisted
    const isBlacklisted = await blacklistedTokenModel.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Unauthorized: Token is blacklisted" });
    }

    // Verify and decode token
    const decoded = verifyToken(token);
    if (!decoded || !decoded._id) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    // Fetch the user
    const user = await userModel.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    req.user = user; // Attach the user object to the request
    next();
  } catch (error) {
    console.error("Authentication error:", error.message);
    return res.status(401).json({ message: `Unauthorized: ${error.message}` });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = req.cookies.token || (authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null);

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    // Check if the token is blacklisted
    const isBlacklisted = await blacklistedTokenModel.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Unauthorized: Token is blacklisted" });
    }

    // Verify and decode token
    const decoded = verifyToken(token);
    if (!decoded || !decoded._id) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    // Fetch the captain
    const captain = await captainModel.findById(decoded._id);
    if (!captain) {
      return res.status(401).json({ message: "Unauthorized: Captain not found" });
    }

    req.captain = captain; // Attach the captain object to the request
    next();
  } catch (error) {
    console.error("Authentication error:", error.message);
    return res.status(401).json({ message: `Unauthorized: ${error.message}` });
  }
};

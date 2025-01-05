const usermodel = require("../models/user.models");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const blacklistModel = require("../models/blacklistToken.model");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  const isUserAlreadyExists = await usermodel.findOne({ email });
  if (isUserAlreadyExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  
  const hashedPassword = await usermodel.hashPassword(password);

  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });
  const tokens = user.generateAuthToken();
  res.status(201).json({ tokens, user });
};

module.exports.loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const user = await usermodel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const tokens = user.generateAuthToken();

  res.cookie("token", JSON.stringify(tokens), {
    httpOnly: true, // Prevents access to the token via JavaScript
    secure: process.env.NODE_ENV === "production", // Set to true for production environments (HTTPS)
    maxAge: 24 * 60 * 60 * 1000, // Optional: set cookie expiry time
  });

  res.status(200).json({ tokens, user });
};

module.exports.getProfile = async (req, res) => {
  const user = req.user;
  res.status(200).json({ user });
};

module.exports.logoutUser = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (token) {
    await blacklistModel.create({ token });
    res.clearCookie("token"); // Explicitly clear the cookie
  }

  res.status(200).json({ message: "Logout successful" });
};
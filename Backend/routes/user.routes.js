const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const usercontroller = require("../Controllers/user.controller.js");
const authmiddleware = require("../middleware/auth.middleware");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Please enter valid email address "),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  usercontroller.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please enter valid email address "),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  usercontroller.loginUser
);

router.get("/profile", authmiddleware.authuser, usercontroller.getProfile);

router.get("/logout", authmiddleware.authuser, usercontroller.logoutUser);

module.exports = router;

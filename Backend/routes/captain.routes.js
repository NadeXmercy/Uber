const captaincontroller = require("../Controllers/captain.controller.js");
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

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
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("color must be at least 3 characters long"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("color must be at least 3 characters long"),
    body("vehicle.capacity").isInt().withMessage("capacity must be integer"),
    body("vehicle.vehicleType")
      .isIn(["car", "motorbike", "auto"])
      .withMessage("vehicle type invalid"),
  ],
  captaincontroller.registerCaptain
);

module.exports = router;

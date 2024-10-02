const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models/User");
const router = express.Router();

/**
 * @desc Register New User
 * @route /api/auth/register
 * @method POST
 * @access public
 */

router.post("/register", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json({ message: "User with given email already exists!" });
    }

    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: req.body.password,
      city: req.body.city,
      tags: req.body.tags,
      bio: req.body.bio,
      avatar: req.body.avatar,
      facebook: req.body.facebook,
      instagram: req.body.instagram,
      linkedin: req.body.linkedin,
      isAdmin: req.body.isAdmin,
    });

    await user.save();
    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
});

/**
 * @desc Login
 * @route /api/auth/login
 * @method POST
 * @access public
 */

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: "Invalid Email Or Password" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid Email or Password" });
    }
    const token = user.generateAuthToken();
    res.status(200).json({ data: token, message: "logged in successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = router;

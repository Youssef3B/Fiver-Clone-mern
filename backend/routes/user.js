const express = require("express");
const { User } = require("../models/User");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Use path.join to construct the relative path
    const destinationPath = path.join(
      __dirname,
      "../../frontend/public/uploads/"
    );
    cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
/**
 * @path /api/user/allusers
 * @method Get
 * @description Get all users
 */

router.get("/allusers", async (req, res) => {
  try {
    const usersList = await User.find();
    res.status(200).json(usersList);
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong", error });
  }
});

/**
 * @path /api/user/getUsersById
 * @method Get
 * @description Get User From His Id
 */

router.get("/getUserById/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something wen wrong", error });
  }
});

/**
 * @desc     Delete User From His Id
 * @route    /api/user/deleteUserById
 * @method   DELETE
 * @access   public
 */
router.delete("/deleteUserById/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "User Deleted successfully" });
    } else {
      res.status(404).json({ message: "User Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something wen wrong", error });
  }
});

/**
 * @desc     Edit User From His Id
 * @route    /api/user/editUserById
 * @method   PUT
 * @access   public
 */

router.put("/editUserById/:id", upload.single("avatar"), async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      const avatarPath = req.file ? req.file.path : user.avatar;

      // Check if the password is being updated
      let updatedData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        city: req.body.city,
        bio: req.body.bio,
        avatar: avatarPath,
        facebook: req.body.facebook,
        instagram: req.body.instagram,
        linkedin: req.body.linkedin,
        category: req.body.category,
      };

      if (req.body.password) {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        updatedData.password = hashedPassword;
      }

      await User.findByIdAndUpdate(
        req.params.id,
        { $set: updatedData },
        { new: true }
      );
      res.status(200).json({ message: "User updated successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});
module.exports = router;

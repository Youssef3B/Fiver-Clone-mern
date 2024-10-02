const express = require("express");
const userArr = require("../helper/userArr");
const { Favorite } = require("../models/Favorite");
const router = express.Router();

/**
 * @desc     Get All favorites
 * @route    /api/favorites
 * @method   GET
 * @access   public
 */
router.get("/", async (req, res) => {
  try {
    const favorites = await Favorite.find().populate([
      {
        path: "user",
        select: userArr, // Ensure userArr is defined correctly
      },
      {
        path: "service",
        select: ["user", "title", "images", "description"],
        populate: {
          path: "user",
          select: userArr, // Ensure userArr is defined correctly
        },
      },
    ]);

    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

/**
 * @desc     Add A new Favorite
 * @route    /api/favorites
 * @method   POST
 * @access   public
 */

router.post("/", async (req, res) => {
  try {
    const favorite = new Favorite({
      user: req.body.user,
      service: req.body.service,
    });
    const result = await favorite.save();
    if (result) {
      res.status(201).json(favorite);
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});

/**
 * @desc     Delete a favorite
 * @route    /api/favorites/id
 * @method   DELETE
 * @access   public
 */

router.delete("/:id", async (req, res) => {
  try {
    const favorite = await Favorite.findById(req.params.id);
    if (favorite) {
      await Favorite.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Favorite deleted successfully" });
    } else {
      res.status(404).json({ message: "Favorite not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});
module.exports = router;

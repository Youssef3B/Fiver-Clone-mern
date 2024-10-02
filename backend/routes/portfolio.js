const express = require("express");
const { Portfolio } = require("../models/Portfolio");
const userArr = require("../helper/userArr");
const router = express.Router();

/**
 * @desc     Get All Portfolio
 * @route    /api/portfolio
 * @method   GET
 * @access   public
 */
router.get("/", async (req, res) => {
  try {
    const portfolio = await Portfolio.find().populate("user", userArr);
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});

/**
 * @desc     Get portfolio from his Id
 * @route    /api/portfolio/:id
 * @method   GET
 * @access   public
 */

router.get("/:id", async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id).populate(
      "user",
      userArr
    );
    if (portfolio) {
      res.status(200).json(portfolio);
    } else {
      res.status(404).json({ message: "Portfolio not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});

/**
 * @desc     Create a new portfolio
 * @route    /api/portfolio
 * @method   POST
 * @access   public
 */

router.post("/", async (req, res) => {
  try {
    const portfolio = new Portfolio({
      user: req.body.user,
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      link: req.body.link,
    });
    const result = await portfolio.save();
    if (result) {
      res.status(201).json(portfolio);
    } else {
      res.status(404).json("portfolio Not Created");
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong", error: error });
  }
});

/**
 * @desc     Edit a portfolio from his Id
 * @route    /api/portfolio/id
 * @method   PUT
 * @access   public
 */

router.put("/:id", async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          user: req.body.user,
          title: req.body.title,
          description: req.body.description,
          image: req.body.image,
          link: req.body.link,
        },
      },
      { new: true }
    );
    if (portfolio) {
      res.status(200).json({ message: "Portfolio updated successfully" });
    } else {
      res.status(404).json({ message: "Portfolio not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});

/**
 * @desc     Delete a portfolio from his Id
 * @route    /api/portfolio/id
 * @method   DELETE
 * @access   public
 */

router.delete("/:id", async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (portfolio) {
      await Portfolio.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Portfolio deleted successfully" });
    } else {
      res.status(404).json({ message: "Portfolio Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});
module.exports = router;

const express = require("express");
const { CommentService } = require("../models/CommentService");
const userArr = require("../helper/userArr");
const router = express.Router();

/**
 * @desc     Get All Comments of the service
 * @route    /api/commentsService
 * @method   GET
 * @access   public
 */
router.get("/", async (req, res) => {
  try {
    const comments = await CommentService.find().populate([
      {
        path: "user",
        select: userArr,
      },
      {
        path: "service",
        select: ["user", "title", "images", "description"],
      },
    ]);

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

/**
 * @desc     Post a Comment
 * @route    /api/commentsService
 * @method   POST
 * @access   public
 */

router.post("/", async (req, res) => {
  try {
    const comment = new CommentService({
      user: req.body.user,
      service: req.body.service,
      description: req.body.description,
    });
    const result = await comment.save();
    if (result) {
      res.status(201).json(comment);
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});

/**
 * @desc     Delete a Comment
 * @route    /api/commentsService/id
 * @method   DELETE
 * @access   public
 */

router.delete("/:id", async (req, res) => {
  try {
    const comment = await CommentService.findById(req.params.id);
    if (comment) {
      await CommentService.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Comment deleted successfully" });
    } else {
      res.status(404).json({ message: "Comment not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});
module.exports = router;

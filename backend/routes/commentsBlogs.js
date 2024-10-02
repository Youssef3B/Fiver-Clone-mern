const express = require("express");
const userArr = require("../helper/userArr");
const { CommentBlog } = require("../models/CommentBlog");
const router = express.Router();

/**
 * @desc     Get All Comments of the Blog
 * @route    /api/commentsBlog
 * @method   GET
 * @access   public
 */
router.get("/", async (req, res) => {
  try {
    const comments = await CommentBlog.find().populate([
      {
        path: "user",
        select: userArr,
      },
      {
        path: "blog",
        select: ["user", "title", "image", "description"],
      },
    ]);

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

/**
 * @desc     Post a Comment
 * @route    /api/commentsBlog
 * @method   POST
 * @access   public
 */

router.post("/", async (req, res) => {
  try {
    const comment = new CommentBlog({
      user: req.body.user,
      blog: req.body.blog,
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
 * @route    /api/commentsBlog/id
 * @method   DELETE
 * @access   public
 */

router.delete("/:id", async (req, res) => {
  try {
    const comment = await CommentBlog.findById(req.params.id);
    if (comment) {
      await CommentBlog.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Comment deleted successfully" });
    } else {
      res.status(404).json({ message: "Comment not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});
module.exports = router;

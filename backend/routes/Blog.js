const express = require("express");
const { Blog } = require("../models/Blog");
const router = express.Router();

/**
 * @desc Get All Blogs
 * @route /api/blog
 * @method GET
 * @access public
 */

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().populate("user", [
      "_id",
      "firstName",
      "lastName",
      "phoneNumber",
      "email",
      "city",
      "tags",
      "bio",
      "avatar",
      "facebook",
      "instagram",
      "linkedin",
    ]);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});

/**
 * @desc Get blog By His Id
 * @route /api/blog/:id
 * @method GET
 * @access public
 */

router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("user", [
      "_id",
      "firstName",
      "lastName",
      "phoneNumber",
      "email",
      "city",
      "tags",
      "bio",
      "avatar",
      "facebook",
      "instagram",
      "linkedin",
    ]);
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});
/**
 * @desc Create a new blog
 * @route /api/blog
 * @method POST
 * @access public
 */

router.post("/", async (req, res) => {
  try {
    const blog = new Blog({
      user: req.body.user,
      title: req.body.title,
      image: req.body.image,
      description: req.body.description,
    });
    const result = await blog.save();
    if (result) {
      res.status(201).json(blog);
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});

/**
 * @desc Edit Blog From His Id
 * @route /api/Blog/:id
 * @method PUT
 * @access public
 */

router.put("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          user: req.body.user,
          title: req.body.title,
          image: req.body.image,
          description: req.body.description,
        },
      },
      { new: true }
    );

    if (blog) {
      res.status(200).json({ message: "Blog updated successfully" });
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went Wrong", error });
  }
});

/**
 * @desc Delete Blog From His Id
 * @route /api/blog/:id
 * @method DELETE
 * @access public
 */
router.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      await Blog.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Blog Has Been Deleted successfully" });
    } else {
      res.status(404).json({ message: "Blog Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});
module.exports = router;

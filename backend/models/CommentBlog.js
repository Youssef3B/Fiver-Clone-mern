const mongoose = require("mongoose");

// CommentServices Schema

const CommentBlogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Blog",
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

// CommentsService Model
const CommentBlog = mongoose.model("CommentBlog", CommentBlogSchema);

module.exports = { CommentBlog };

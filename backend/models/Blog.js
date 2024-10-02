const { required } = require("joi");
const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      minlength: 5,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = { Blog };

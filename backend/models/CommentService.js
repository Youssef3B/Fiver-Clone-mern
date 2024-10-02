const mongoose = require("mongoose");

// CommentServices Schema

const CommentServiceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Service",
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
const CommentService = mongoose.model("CommentService", CommentServiceSchema);

module.exports = { CommentService };

const mongoose = require("mongoose");
const joi = require("joi");

// Service Schema

const ServiceSchema = new mongoose.Schema(
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
      maxlength: 250,
    },
    images: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 5,
    },
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", ServiceSchema);

module.exports = { Service };

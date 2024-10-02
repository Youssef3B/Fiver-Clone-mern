const { required } = require("joi");
const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 5,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      minlength: 5,
      trim: true,
    },
    link: {
      type: String,
      minlength: 5,
      trim: true,
    },
  },
  { timestamps: true }
);

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);

module.exports = { Portfolio };

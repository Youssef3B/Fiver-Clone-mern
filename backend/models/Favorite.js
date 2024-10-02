const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = { Favorite };

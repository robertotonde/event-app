const mongoose = require("mongoose");
const { Schema } = mongoose;

const linkSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      trim: true,
    },

    title: {
      type: String,
      required: true,
    },
    urlPreview: {},
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    views: { type: Number, default: 0 },
    likes: [{ type:mongoose.Schema.Types.ObjectId, ref: "User" }],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Link", linkSchema);

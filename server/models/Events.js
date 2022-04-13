const mongoose = require("mongoose");

const { Schema } = mongoose;

const eventsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    venue: {
      type: String,
      required: true,
    },
    onlineLink: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },

    endTime: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      public_id: "",
      url: "",
    },
  },
  { timestamps: true }
);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    image: {
        type: String,
        set: (v) =>
            v === " "
                ? "https://unsplash.com/photos/people-raising-wine-glass-in-selective-focus-photography-ULHxWq8reao"
                : v,
    },

    date: {
        type: Date,
        required: true,
    },

    venue: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true
    },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
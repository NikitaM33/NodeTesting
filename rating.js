const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RatingsSchema = new Schema({
    place: Number,
    firstName: String,
    secondName: String,
    lastName: String,
    fees: String
});

const Rating = mongoose.model("rating", RatingsSchema);

module.exports = Rating;
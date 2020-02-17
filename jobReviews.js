const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobReviewsSchema = new Schema({

    firstName: String,
    lastName: String,
    dep: String,
    review: String
});

const Review = mongoose.model("review", JobReviewsSchema);

module.exports = Review;
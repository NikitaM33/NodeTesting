const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const competitionSchema = new Schema({
    src: String,
    thumbnail: String,
    thumbnailWidth: Number,
    thumbnailHeight: Number,
    caption: String,
    thumbnailCaption: String,
    totalLikes: Number
});

const Competition = mongoose.model("competition", competitionSchema);

module.exports = Competition;
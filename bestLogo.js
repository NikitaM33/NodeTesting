const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BestLogoSchema = new Schema({
    src: String,
    thumbnail: String,
    thumbnailWidth: Number,
    thumbnailHeight: Number,
    caption: String,
    thumbnailCaption: String,
    totalLikes: Number
});

const BestLogo = mongoose.model("bestlogo", BestLogoSchema);

module.exports = BestLogo;
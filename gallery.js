const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GallerySchema = new Schema({
    src: String,
    thumbnail: String,
    thumbnailWidth: Number,
    thumbnailHeight: Number
});

const Gallery = mongoose.model("gallery", GallerySchema);

module.exports = Gallery;
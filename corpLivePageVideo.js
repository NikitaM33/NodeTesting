const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const corpVideoSchema = new Schema({
    cover: String,
    video: String,
    dateOfUpload: String    
});

const CorpVideo = mongoose.model("corpVideo", corpVideoSchema);

module.exports = CorpVideo;
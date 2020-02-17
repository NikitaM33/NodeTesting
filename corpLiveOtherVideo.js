const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OtherVideoSchema = new Schema({
    cover: String,
    video: String,
    dateOfPublish: String,
    descr: String
});

const OtherVideo = mongoose.model("otherVideo", OtherVideoSchema);

module.exports = OtherVideo;
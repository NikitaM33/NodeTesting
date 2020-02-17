const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestSchema = new Schema({
    caption: String,
    thumbnailCaption: String,
    totalLikes: Number
});

const Test = mongoose.model("test", TestSchema);

module.exports = Test;
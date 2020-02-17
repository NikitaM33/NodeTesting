const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    newsHeader: String,
    newsContent: String,
    newsImg: String,
    newsModalImg: String,
    newsVideo: String,
    dateOfpublish: String,
    timeOfPublish: String,
    link: Boolean,
    number: Number,
    nameLink: String,
    LinkPath: String,
    timeStamp: String
});

const News = mongoose.model("news", NewsSchema);

module.exports = News;
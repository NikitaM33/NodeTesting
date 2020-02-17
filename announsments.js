const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnnounsmentSchema = new Schema({
    img: String,
    breackingNews: String,
    newsText: String,
    date: String
});

const Announsment = mongoose.model("announsment", AnnounsmentSchema);

module.exports = Announsment;
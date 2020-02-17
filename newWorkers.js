const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewWorkerSchema = new Schema({
    img: String,
    imgBig: String,
    firstName: String,
    lastName: String,
    introdusing: String
});

const NewWorker = mongoose.model("newWorker", NewWorkerSchema);

module.exports = NewWorker;
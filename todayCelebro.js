const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodayCelebroSchema = new Schema({
    photoBirthday: String,
    largePhotoBirthday: String,
    lastName: String,
    name: String,
    secondName: String,
    depart: String,
    dateOfBirthday: String,
    dayOfBirthday: Number,
    monthOfBirthday: Number
});

const TodayCelebro = mongoose.model("todayCelebro", TodayCelebroSchema);

module.exports = TodayCelebro;
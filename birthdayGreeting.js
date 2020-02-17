const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GreetingSchema = new Schema({
    lastName: String,
    name: String,
    secondName: String,
    fullBirthDate: String,
    depart: String,
    city: String,
    dateOfBirthday: String,
    dayOfBirthday: Number,
    monthOfBirthday: Number,
    img: String,
    imgBig: String,
    created: String
});

const GreetingPhotos = mongoose.model('greetingPhoto', GreetingSchema);

module.exports = GreetingPhotos
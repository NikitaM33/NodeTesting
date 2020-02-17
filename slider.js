const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SliderSchema = new Schema({
    sliderImages: String
    
});

const Slider = mongoose.model("slider", SliderSchema);

module.exports = Slider;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MainPageSchema = new Schema({
    videoGreeting: String,
    cover: String
});

const MainPage = mongoose.model("mainPage", MainPageSchema);

module.exports = MainPage;
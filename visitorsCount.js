const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitorsCountSchema = new Schema({
        mainPage: Number,
        infoPage: Number,
        vacationPage: Number,
        corpLifePage: Number,
        birthdayPage: Number,
        tournamentPage: Number,
        date: Number
});

const VisitorsCount = mongoose.model("visitorsCount", VisitorsCountSchema);

module.exports = VisitorsCount;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InterviewSchema = new Schema({
    reporter: Array,
    respondent: Array,
    imageRespondent: String
});

const TournamentInteview = mongoose.model("tournamentInteview", InterviewSchema);

module.exports = TournamentInteview;
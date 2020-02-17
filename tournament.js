const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TournamentSchema = new Schema({
    nameInterviewer: String,
    interviewImg: String
    // reporter: {

    // },                        // удалить ?????
    // interviewer: {
        
    // }
});

const Tournament = mongoose.model("tournament", TournamentSchema);

module.exports = Tournament;
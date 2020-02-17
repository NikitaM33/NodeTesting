const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LeadersSchema = new Schema({
    place: Number,
    firstName: String,
    secondName: String,
    fees: String,
    groupNumber: String,
    playground: String
});

const Leader = mongoose.model("leader", LeadersSchema);

module.exports = Leader;
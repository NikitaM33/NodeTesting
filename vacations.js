const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VacationaSchema = new Schema({
    nameOfVacation: String,
    department: String,
    additionallyRequirments: String,
    duties: Array,     
    requirements: Array,     
    conditions: Array, 
    vacationDate: String
});

const Vacation = mongoose.model("vacation", VacationaSchema);

module.exports = Vacation;
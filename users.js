const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: String,
    age: Number,
    dep: String,
    isAdmin: Boolean
});

const User = mongoose.model("user", UsersSchema);

module.exports = User;
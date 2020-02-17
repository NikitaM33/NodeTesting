const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikesSchema = new Schema({
    totalLikes: Number
});

const Like = mongoose.model("like", LikesSchema);

module.exports = Like;
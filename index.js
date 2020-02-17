const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
// const Grid = require('gridfs-stream');
const fs = require('fs');
const rating = fs.readFileSync('C:/Users/MelchenkovNM/Desktop/OSPanel/domains/filbert2/public/rating/rating.json');
const ratingJson = JSON.parse(rating);
// const nodemailer = require('nodemailer');
const multer = require('multer');
// const cors = require('cors');
// const upload = require('express-fileupload');





console.log(ratingJson);

// Основы Node.JS. 2. Работа с файлами txt

// Make a MongoDB connecttion/establish MongoDB connection
mongoose.connect("mongodb://localhost/users-db", {useNewUrlParser: true});

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", require("./api"));
// app.use(upload());





// let upload = multer({
//     storage: Storage
// }).single('file');

// router.post('/upload', upload, (req, res, next) => {
//     var success = req.file.filename + 'uploaded';
//     res.render('upload-file', {title: 'Upload file', success})
// });






app.listen(8080, () => {
    console.log("server is listening 8080");
});

app.use(express.static("public"));
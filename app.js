const fs = require('fs');
fs.readFile('rating.json', (err, data) => {
    if(err) throw err;
    let arr = data.toString();
    arr = JSON.parse(arr);
    console.log(arr.firstName);
});
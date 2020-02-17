const fs = require('fs');
fs.readFile('http://filbert2/public/rating/rating.json', (err, data) => {
    if(err) throw err;
    console.log(data);
})


// Основы Node.JS. 2. Работа с файлами
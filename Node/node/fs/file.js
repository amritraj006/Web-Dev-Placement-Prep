const fs = require('fs');

fs.writeFile('message.txt', 'Hello Node.js', (err) => {
    if (err) throw err;
    console.log('File saved!');
});

fs.readFile('message.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.appendFile('message.txt', '\nAppended text.', (err) => {
    if (err) throw err;
    console.log('Text appended!');
});


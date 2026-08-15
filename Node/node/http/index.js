const http = require('http');//communication protocol used between server and a client

const server = http.createServer((req, res) => {
    res.statusCode = 200; //OK
    res.setHeader('Content-Type', 'text/html'); //response will be send in the form of html

    // res.writeHead(200, { //Set the status code and header
    //     "Content-Type" : "text/plain"
    // });
    res.end("<p>Hello world</p>");
})

server.listen(2000, () => console.log(`Server running at http://localhost:2000`));

// res.setHeader('Content-Type', 'application/json'); //response will be send in the form of JSON
// res.setHeader('Content-Type', 'text/plain'); //response will be send in the form of normal text

//res.write() -> writes the part of data but does not end the response

//res.end() -> writes the data and also end the response

//StatusCode
/* 
200 -> OK
404 -> Not Found
500 -> Server Error
201 -> Created
400 -> Bad request
401 -> Unauthorized
*/
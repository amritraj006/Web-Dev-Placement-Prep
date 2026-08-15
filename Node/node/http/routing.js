const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end('<h1>Welcome to Home page.</h1>');
    }

    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end('<h1>Welcome to About page.</h1>');
    }

    else if (req.url === '/form' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <form action="/result" method="POST">
                <input type="text" name="name" placeholder="Enter your name" />
                <input type="submit" />
            </form>
        `);
    }

    else if (req.url === '/result' && req.method === 'POST') {
        let data = [];

        req.on('data', (chunk) => {
            data.push(chunk);
        });

        req.on('end', () => {
            const body = Buffer.concat(data).toString();
            const name = body.split('=')[1];

            res.writeHead(200, { 'Content-Type': 'text/html' });

            res.end(`
                <h1>Form submitted successfully</h1>
                <p>Name: ${name}</p>
            `);
        });

        return;
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end('<h1>Page not found</h1>');
    }

});

server.listen(3000, () => console.log('http://localhost:3000'));
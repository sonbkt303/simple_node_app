const http = require('http');

const hostname = '0.0.0.0'; // Change from '127.0.0.1' to '0.0.0.0'
const port = 80; // Change from 3000 to 8080

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

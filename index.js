// https://github.com/bradtraversy/node_crash_course

const http = require('http');

const server = http.createServer((req, res) => {
  //console.log('request:', req);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('all okey');
});

const PORT = 5000;

server.listen(5000, () => {
  console.log(`Server running on port ${PORT}`);
});

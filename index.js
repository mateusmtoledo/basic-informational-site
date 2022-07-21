const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  const fileName = req.url === '/' ? './index.html' : '.' + req.url;
  const file = fs.readFile(fileName, (err, data) => {
    if(err) {
      fs.readFile('./404.html', (err, data) => {
        res.statusCode = 404;
        res.write(data);
        res.end();
      });
    } else {
      res.statusCode = 200;
      res.write(data);
      res.end();
    };
  });
});

server.listen('8080', () => {
  console.log('Listening to port 8080');
});

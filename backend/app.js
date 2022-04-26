const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 4545 ; 
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(port, () => {
  console.log('listening on *:' + port);
});
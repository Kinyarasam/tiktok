const express = require('express');
const { appendFile } = require('fs');
const server = express();
const http = require('http');
const cors = require('cors');
require('dotenv').config();


const PORT = process.env.PORT || 8082;

// middlewares
server.use(cors);


// routes
server.get('/', (req, res) => {
  res.send('home');
})


const start = (req, res) => {
  console.log('Server is running on PORT ' + PORT);
};

server.listen(PORT, start())
// http.createServer(start()).listen(PORT);

// console.log(process.env.PORT)
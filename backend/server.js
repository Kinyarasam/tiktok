const express = require('express');
const app = express();
const http = require('http');
require('dotenv').config()

const PORT = process.env.PORT || 8082
const start = (req, res) => {
  console.log('Server is running on PORT ' + PORT);
}

http.createServer(start()).listen(PORT);

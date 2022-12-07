#!/usr/bin/node

const express = require('express');
const server = express();
require('dotenv').config();
const routes = require('./routes/index');
const auth = require('./routes/auth');
// const cors = require('cors');
// const { appendFile } = require('fs');
// const http = require('http');

/* PORT */

const PORT = process.env.PORT || 8082;

/* Connect to DB */

const DB = require('./db/connect');

/* Configure cors */

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// middlewares
// server.use(cors);
// server.use(routes);
server.use(express.json());
server.use('/auth', auth)
server.use('/home', routes);

/* routes */

server.get('/', (req, res) => {
  res.send('home');
});

/* Start Server */

const start = async (req, res) => {
  console.log('Establishing Connection . . .\n');

  try {
    await DB(process.env.MONGO_URI);
    console.log('<DATABASE connected SUCCESSFULLY . . . > \n');

    console.log('Server is running on PORT ' + PORT);
  } catch (err) {
    console.log(err);
  }
};

server.listen(PORT, start());
// http.createServer(start()).listen(PORT);

// console.log(process.env.PORT)

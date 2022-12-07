#!/usr/bin/node

const express = require('express');
const routes = express.Router();


routes.get('/', (req, res) => {
  console.log("Get '/' route");
  res.send("Get '/' routes");
});

// routes.post('/login', (req, res) => {
//   /* Login logic */
 
//   console.log('Welcome');
//   res.end('welcome');
// })

if (isAuthenticated == true) {
  // Do Something
} else {
  // Do Something.
}

function isAuthenticated() {
  // Do something Here
};

module.exports = routes;

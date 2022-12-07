const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  console.log("Get '/' route");
  res.send("Get '/' routes");
});


if (isAuthenticated == true) {
  // Do Something
} else {
  // Do Something.
}

function isAuthenticated() {
  // Do something Here
};

module.exports = routes;

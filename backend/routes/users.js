/* This route is here to test the general functioning of the backend. It
* is therefore a dummy route */
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

/* Import of Express needed for instantiation of Router */
const express = require('express');
/* Importing the database connection */
const db = require('../db/conn');
/* Import of primary key identifier */
const ObjectId = require('mongodb').ObjectId;

/* Creating an instance of Router */
const router = express.Router();

/* Importing the log.controller db interaction controller */
const logController = require('../controllers/log.controller');

router.post('/', logController.saveNewJob);


module.exports = router;
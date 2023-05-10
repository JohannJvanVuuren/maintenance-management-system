/* Import of Express */
const express = require('express');
/* Creating an instance of Router */
const router = express.Router();

/* Import of the file that contains the controller for this route */
const submitJob = require('../controllers/submitJob');

/* Setting up a route for the incoming information from the frontend needed to submit
* a job to the database */
router.post('/', submitJob.submitJobController);

/* Export of the router instance */
module.exports = router;
/* Import of Express needed for instantiation of Router */
import express from 'express';

/* Creating an instance of Router */
const router = express.Router();

/* Importing the log.controller db interaction controller */
import * as logController from '../controllers/saveNewJob.js';

router.post('/', logController.saveNewJob);

export default router;
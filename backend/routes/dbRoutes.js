/* Importing the database connection */
import db from '../db/conn.js'

/* Import of Express needed for instantiation of Router */
import express from 'express';

/* Creating an instance of Router */
const router = express.Router();

/* Importing the log.controller db interaction controller */
import * as logController from '../controllers/log.controller.js';

router.post('/', logController.saveNewJob);
router.get('/',logController.getJobList);
router.get('/:id', logController.findJob);
router.patch('/:id', logController.updateJob);
router.delete('/:id', logController.deleteJob)

export default router;
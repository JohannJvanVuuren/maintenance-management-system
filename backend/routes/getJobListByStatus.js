/* Import of Express needed for instantiation of Router */
import express from 'express';

/* Creating an instance of Router */
const router = express.Router();

/* Importing the log.controller db interaction controller */
import { getJobListByStatus } from '../controllers/log.controller.js';

/* Setting up the getJobListByStatus router and its controller */
router.get('/', getJobListByStatus);

export default router;
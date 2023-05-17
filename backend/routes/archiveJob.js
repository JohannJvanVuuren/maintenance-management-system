/* Import of Express needed for instantiation of Router */
import express from 'express';

/* Creating an instance of Router */
const router = express.Router();

/* Importing the log.controller db interaction controller */
import { archiveJob } from '../controllers/log.controller.js';

/* Setting up the archiveJob router and its controller */
router.post('/:id', archiveJob);

export default router;
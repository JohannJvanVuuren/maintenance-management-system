/* Import of Express needed for instantiation of Router */
import express from 'express';

/* Creating an instance of Router */
const router = express.Router();

/* Importing the log.controller db interaction controller */
import { findJob } from '../controllers/log.controller.js';

/* Setting up the findJob router and its controller */
router.get('/:id', findJob);

export default router;
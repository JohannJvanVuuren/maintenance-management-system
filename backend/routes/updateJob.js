/* Import of Express needed for instantiation of Router */
import express from 'express';

/* Creating an instance of Router */
const router = express.Router();

/* Importing the log.controller db interaction controller */
import { updateJob } from '../controllers/log.controller.js';

/* Setting up the updateJob router and its controller */
router.post('/', updateJob);

export default router;
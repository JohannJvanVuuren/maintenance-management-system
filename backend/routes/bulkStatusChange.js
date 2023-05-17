/* Import of Express needed for instantiation of Router */
import express from 'express';

/* Creating an instance of Router */
const router = express.Router();

/* Importing the log.controller db interaction controller */
import { bulkStatusChange } from '../controllers/log.controller.js';

/* Setting up the bulkStatusChange router and its controller */
router.patch('/', bulkStatusChange);

export default router;
/* Import of Express needed for instantiation of Router */
import express from 'express';

/* Creating an instance of Router */
const router = express.Router();

/* Importing the log.controller db interaction controller */
import { create } from '../controllers/log.controller.js';

/* Setting up the saveNewJob router and its controller */
router.post('/', create);

export default router;
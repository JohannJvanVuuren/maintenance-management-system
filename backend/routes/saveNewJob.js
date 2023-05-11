/* Import of Express needed for instantiation of Router */
import express from 'express';
/* Importing the database connection */
import db from '../db/conn.js'
/* Import of primary key identifier */
import { ObjectId } from 'mongodb';

/* Creating an instance of Router */
const router = express.Router();

/* Importing the log.controller db interaction controller */
import { saveNewJob } from '../controllers/log.controller.js';

router.post('/', saveNewJob);

export default router;
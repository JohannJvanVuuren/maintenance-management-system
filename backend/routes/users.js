/* This route is here to test the general functioning of the backend. It
* is therefore a dummy route */

/* Importing Express */
import express from 'express';

/* Creating an instance of Router */
const router = express.Router();

/* Dummy user route. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default router;
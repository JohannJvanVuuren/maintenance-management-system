/* Imports of all modules needed in app.js */
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import helmet from 'helmet';
import crypto from 'crypto';
import cors from 'cors';

// const usersRouter = require('./routes/users.js')
import usersRouter from './routes/users.js';
import saveNewJobRouter from './routes/saveNewJob.js';
import findJobRouter from './routes/findJob.js';
import getJobListByDateRouter from './routes/getJobListByDate.js';
import getJobListByStatusRouter from './routes/getJobListByStatus.js';
import filterJobsByStatusRouter from './routes/filterJobsByStatus.js';
import updateJobRouter from './routes/updateJob.js';
import archiveJobRouter from './routes/archiveJob.js';
import bulkStatusChangeRouter from './routes/bulkStatusChange.js';

const app = express();

// view engine setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(
    '/static',
    express.static(path.join(__dirname, 'public'))
)
app.set('views', './views');
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./public'));
app.use(helmet());

/* Helmet default security settings for the app */
const nonce = crypto.randomUUID();
helmet.contentSecurityPolicy({
  directives: {
    "script-src": [`'nonce-${nonce}'`, 'strict-dynamic'],
    "object-src": 'none',
    "base-uri": 'none',
    "Cross-Origin-Resource-Policy": 'cross-origin',
    "Cross-Origin-Opener-Policy": 'cross-origin',
  }
})

/* Enabling of the different routes */
app.use('/users', usersRouter);
app.use('/saveNewJob', saveNewJobRouter);
app.use('/findJob', findJobRouter);
app.use('/getJobListByDate', getJobListByDateRouter);
app.use('/getJobListByStatus', getJobListByStatusRouter);
app.use('/filterJobsByStatus', filterJobsByStatusRouter);
app.use('/updateJob', updateJobRouter);
app.use('/archiveJob', archiveJobRouter);
app.use('/bulkStatusChange', bulkStatusChangeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;

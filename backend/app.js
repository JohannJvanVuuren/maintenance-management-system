/* Imports of all modules needed in app.js */
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import helmet from 'helmet';
import crypto from 'crypto';
import cors from 'cors';

// const usersRouter = require('./routes/users.js')
import usersRouter from './routes/users.js';
import saveNewJobRouter from './routes/saveNewJob.js';

const app = express();

// view engine setup
app.set('views', ('./views'));
app.set('view engine', 'jade');

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

app.use('/users', usersRouter);
app.use('/saveNewJob', saveNewJobRouter);

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

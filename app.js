const express = require('express');

const path = require('path');
const AppError = require('./utils/appError');
const viewRouter = require('./routes/viewRoutes');

const compression = require('compression');
const errorThrower = require('./controllers/errorController');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(compression());
app.use('/', viewRouter);
app.all('*', (req, res, next) => {
    return next(
      new AppError(`Não encontramos ${req.originalUrl} nesse servidor`, 404)
    );
  });
  
app.use(errorThrower);
module.exports = app;

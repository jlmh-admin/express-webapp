
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pagina1Router = require('./routes/pagina1');
var tienditaInicioRouter = require('./routes/tiendita');
var accederRouter = require('./routes/acceder');
var registroRouter = require('./routes/registro');

var app = express();


// view engine setup
var engines = require('consolidate'); //agregador por mi leer README

app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
app.engine('html', engines.ejs); // agregado por mi. debes agregar otro engin : app.engine('html', engines.ejs);
app.set('view engine', 'html'); //agregado por mi

app.use(logger('dev')); //logs to console what the server is executing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pagina1', pagina1Router); 
app.use('/tiendita', tienditaInicioRouter); 
app.use('/acceder', accederRouter); 
app.use('/registro', registroRouter); 

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

module.exports = app;

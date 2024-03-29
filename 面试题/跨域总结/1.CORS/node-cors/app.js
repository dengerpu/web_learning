var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/test')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 配置跨域
// app.use(async (req, res, next) => {
//   console.log(req.headers)
//   res.set("Access-Control-Allow-Origin", req.headers.origin);
//   res.set("Access-Control-Allow-Credentials", true);
//   res.set("Access-Control-Request-Method", "PUT,POST,GET,DELETE,OPTIONS");
//   res.set(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, cc"
//   );
//   if (res.method === "OPTIONS") {
//     res.status = 204;
//     return;
//   }
//   await next();
// })

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);

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

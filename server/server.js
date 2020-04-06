const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes');
const PORT = process.env.PORT || 8080;

// const dotenv = require('dotenv').config();
// if (dotenv.error) {
//   throw dotenv.error
// }
// console.log(dotenv.parsed);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', apiRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
    .send({
      message: err.message,
      error: (app.get('env') === 'development') ? err : {}
    })
});

app.listen(PORT,
  console.log('==> Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT)
);


module.exports = app;
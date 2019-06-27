var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var shid = require('shortid');
const low = require('lowdb');
const FileSync = require('./node_modules/lowdb/adapters/FileSync');

const adapter = new FileSync('./db.json');
const db = low(adapter);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//user routes
app.get('/api/restaurants', function(req, res, next) {
  let qString = req.query;
  let qObject = {};
  if('area' in qString){
    let t = db.get('addresses').find({area: qString.area}).value();
    if(t){
      qObject['address'] = t.id;
    }
  }
  let rests = db.get('restaurants').filter(qObject).value();
  let this_rests = [];
  if('category' in qString){
    let qCats = qString.category;
    if(!(qCats instanceof Array)){
      qCats = [qCats]
    }
    let all_cats = db.get('cats').value();
    let this_cats = [];
    all_cats.forEach(function (item) {
      if(qCats.includes(item.name)){
        this_cats.push(item.id);
      }
    });
    this_rests = [];
    rests.forEach(function (item) {
      if(item.categories.filter(value => this_cats.includes(value)).length > 0){
        this_rests.push(item);
      }
    });
  }
  else{
    this_rests = rests;
  }
  res.json(this_rests);
});
app.get('/api/restaurants/:id', function(req, res, next) {
  let rest = db.get('restaurants').find({ id: req.params.id }).value();
  res.json(rest);
});
app.get('/api/restaurants/:id/commnets', function(req, res, next) {
  let commnet_ids = db.get('restaurants').find({ id: req.params.id }).get('comments').value();
  let commnets = [];
  commnet_ids.forEach(function (item) {
    let t = db.get('comments').find({ id: item }).value();
    commnets.push(t);
  });
  commnets.sort(function(a, b){
    let keyA = new Date(a.created_at),
        keyB = new Date(b.created_at);
    // Compare the 2 dates
    if(keyA < keyB) return -1;
    if(keyA > keyB) return 1;
    return 0;
  });
  res.json(commnets);
});
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

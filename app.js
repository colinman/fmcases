// Generated by IcedCoffeeScript 1.8.0-a
var app, db, express, iced, mongoose, path, port, schema, stylus, __iced_k, __iced_k_noop;

iced = require('iced-runtime');
__iced_k = __iced_k_noop = function() {};

express = require('express');

path = require('path');

app = module.exports.app = exports.app = express();

mongoose = require('mongoose');

schema = require('./lib/schema.js');

stylus = require('stylus');

mongoose.connect('mongodb://localhost/fmcases');

db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

app.use(stylus.middleware({
  src: __dirname + '/app/styles',
  dest: __dirname + '/app/styles',
  compile: function(str, path) {
    return stylus(str).set('filename', path);
  }
}));

app.get("*", function(req, res, next) {
  console.log("GET " + req.originalUrl);
  return next();
});

app.get("/item/:id", function(req, res) {
  var err, item, ___iced_passed_deferral, __iced_deferrals, __iced_k;
  __iced_k = __iced_k_noop;
  ___iced_passed_deferral = iced.findDeferral(arguments);
  (function(_this) {
    return (function(__iced_k) {
      __iced_deferrals = new iced.Deferrals(__iced_k, {
        parent: ___iced_passed_deferral,
        filename: "/opt/fmcases/app.coffee"
      });
      schema.items.findOne({
        id: req.param('id')
      }, __iced_deferrals.defer({
        assign_fn: (function() {
          return function() {
            err = arguments[0];
            return item = arguments[1];
          };
        })(),
        lineno: 24
      }));
      __iced_deferrals._fulfill();
    });
  })(this)((function(_this) {
    return function() {
      if (err) {
        return console.log(err);
      }
      return res.send(item);
    };
  })(this));
});

app.use(express["static"](path.join(__dirname, 'app')));

port = process.env.PORT || 4000;

app.listen(port, function() {
  return console.log("Listening on " + port);
});

express = require 'express'
path = require 'path'
app = module.exports.app = exports.app = express()
mongoose = require 'mongoose'
schema = require './lib/schema.js'
stylus = require 'stylus'

mongoose.connect 'mongodb://localhost/fmcases'
db = mongoose.connection
db.on 'error', console.error.bind(console, 'connection error:')

#app.set 'views', __dirname + 'views'
#app.set 'view engine', 'jade'

app.use stylus.middleware
  src: __dirname + '/app/styles'
  dest: __dirname + '/app/styles'
  compile: (str, path) -> stylus(str).set('filename', path) #.set('compress', true).set('include css' , true)

app.get "*", (req, res, next) ->
  console.log "GET #{req.originalUrl}"
  next()

app.get "/item/:id", (req, res) ->
  await schema.items.findOne {id: req.param('id')}, defer err, item
  if err then return console.log err
  res.send item

app.use express.static(path.join(__dirname, 'app'))

port = process.env.PORT || 4000;
app.listen port, -> console.log "Listening on #{port}"

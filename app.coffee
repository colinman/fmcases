express = require 'express'
path = require 'path'
app = module.exports.app = exports.app = express()
mongoose = require 'mongoose'
schema = require './lib/schema.js'
stylus = require 'stylus'
_ = require 'underscore'

mongoose.connect 'mongodb://localhost/fmcases'
db = mongoose.connection
db.on 'error', console.error.bind(console, 'connection error:')

#app.set 'views', __dirname + 'views'
#app.set 'view engine', 'jade'

app.use stylus.middleware
  src: __dirname + '/app/styles'
  dest: __dirname + '/app/styles'
  compile: (str, path) -> stylus(str).set('filename', path).set('compress', true).set('include css' , true)

app.get "*", (req, res, next) ->
  console.log "GET #{req.originalUrl}"
  next()

app.get "/item/:id", (req, res) ->
  await schema.items.findOne {id: req.param('id')}, defer err, item
  if err then return console.log err
  res.send item

# characters that form boundaries
ignoreRegex = "[^A-z]"

String.prototype.insert = (index, str) ->
  this.substring(0, index) + str + this.substring(index, this.length);

# TODO: move this somewhere else
truncate = (content, word) ->

  # num occurrences
  count = 0
  
  # "constants"
  leading = 15
  trailing = 10 + word.length

  # clean content of html (imperfect spacing)
  content = content.replace /<(?:.|\n)*?>/gmi, ' '

  # regex through and find + truncate
  regex = new RegExp "#{ignoreRegex}#{word}", 'gi'
  output = ""

  results = regex.exec content
  while results

    if count > 5 then break
    
    count++
    
    # highlight keyword
    fragment = content.substring results.index - leading, results.index + trailing
    fragment = fragment.insert leading + word.length + 1, '</b>'
    fragment = fragment.insert leading + 1, '<b>'

    output += "..." + fragment
    results = regex.exec content

  [output.replace(/\s+/g, ' '), count]

app.get "/search", (req, res) -> res.send []  

app.get "/search/:word", (req, res) ->
  word = req.param('word')
  regex = new RegExp "#{ignoreRegex}#{word}", 'gi'
  await schema.items.find({'content': {$regex: regex}}, {id: 1, title: 1, content:1}).lean().exec defer err, results
  if err then return console.log err
  results = _.each results, (r) -> [r.content, r.count] = truncate r.content, word
  res.send(_.reject results, (r) -> r.content is '')

app.use express.static(path.join(__dirname, 'app'))

port = process.env.PORT || 80;
app.listen port, -> console.log "Listening on #{port}"

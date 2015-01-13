mongoose = require 'mongoose'

ItemSchema = mongoose.Schema
  id: {type: Number, index: {unique: true, sparse: true}}
  title: String
  items: [{title: String, id: Number, pageType: String, expandableContent: String}]
  content: String

module.exports.items = mongoose.model 'Item', ItemSchema

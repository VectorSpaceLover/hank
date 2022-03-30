const mongoose = require('mongoose');

const collectionsSchema = new mongoose.Schema({
  collectionName: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false,
  },
  count: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  imageList: {
    type: Array,
    required: false,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Collections', collectionsSchema);

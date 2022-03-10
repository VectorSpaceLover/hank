const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  subName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  imageList: {
    type: Array,
    required: false,
  },
  favourited: {
    type: Boolean,
    required: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

// const User = mongoose.model('User', userSchema);
module.exports = mongoose.model('Products', productsSchema);

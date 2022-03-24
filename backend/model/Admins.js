const mongoose = require('mongoose');

const AdminsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetcode: {
    type: String,
    required: false,
  },
  type: {
      type: Number,
      required: true,
  },
  isActive: {
    type: Boolean,
    required: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Admins', AdminsSchema);

const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  twitter: {
    type: String,
    required: false,
  },
  instagram: {
    type: String,
    required: false,
  },
  dribbble: {
    type: String,
    required: false,
  },
  behance: {
    type: String,
    required: false,
  },
  isGoogle: {
    type: Boolean,
    required: false,
  },
  isFacebook: {
    type: Boolean,
    required: false,
  },
  avatarPath: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  shortBio: {
    type: String,
    required: false,
  },
  emailNotification: {
    type: Array,
    required: false,
  },
  resetcode: {
    type: String,
    required: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Users', usersSchema);

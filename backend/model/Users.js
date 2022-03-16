const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
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
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Users', usersSchema);

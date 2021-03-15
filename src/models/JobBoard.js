const mongoose = require('mongoose');

const JobBoard = mongoose.model('JobBoard', {
  name: {
    type: String
  },
  rating: {
    type: String
  },
  rootDomain: {
    type: String
  },
  logoFile: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = JobBoard;

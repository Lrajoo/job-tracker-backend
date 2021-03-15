const mongoose = require('mongoose');

const JobOpportunity = mongoose.model('JobOpportunity', {
  _id: {
    type: Number
  },
  jobTitle: {
    type: String
  },
  companyName: {
    type: String
  },
  jobURL: {
    type: String
  },
  jobSource: {
    type: String
  }
});

module.exports = JobOpportunity;

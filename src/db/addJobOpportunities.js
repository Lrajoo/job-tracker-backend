const JobOpportunity = require('../models/JobOpportunity');
const fs = require('fs');
const csv = require('csv-parser');
const csvData = [];
const mongodb = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const jobBoardsJSON = require('../assets/jobBoards.json');
const resolver = require('../util/jobSourceResolver');

let url = 'mongodb+srv://admin:admin@cluster0.qupsw.mongodb.net/jobs-api?retryWrites=true&w=majority';
//'mongodb://localhost:27017/jobs-api';

fs.createReadStream('/Users/lingessrajoo/Desktop/Pathrise/job-tracker-backend/src/assets/job_opportunities.csv')
  .pipe(csv({}))
  .on('data', data => {
    let jobSource = resolver.jobSourceResolver(
      {
        jobTitle: data['Job Title'],
        companyName: data['Company Name'],
        jobURL: data['Job URL']
      },
      jobBoardsJSON['job_boards']
    );
    csvData.push(
      new JobOpportunity({
        _id: data['ID (primary key)'],
        jobTitle: data['Job Title'],
        companyName: data['Company Name'],
        jobURL: data['Job URL'],
        jobSource: jobSource
      })
    );
  })
  .on('end', () => {
    mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
    JobOpportunity.insertMany(csvData)
      .then(function() {
        console.log(csvData.length);
        console.log('Data inserted'); // Success
      })
      .catch(function(error) {});
  });

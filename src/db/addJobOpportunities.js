const JobOpportunity = require('../models/JobOpportunity');
const fs = require('fs');
const csv = require('csv-parser');
const csvData = [];
const mongodb = require('mongodb').MongoClient;

let url = 'mongodb://localhost:27017/';

fs.createReadStream('/Users/lingessrajoo/Desktop/Pathrise/job-tracker-backend/src/assets/job_opportunities.csv')
  .pipe(csv({}))
  .on('data', data => {
    csvData.push(
      new JobOpportunity({
        _id: data['ID (primary key)'],
        jobTitle: data['Job Title'],
        companyName: data['Company Name'],
        jobURL: data['Job URL'],
        jobSource: ''
      })
    );
  })
  .on('end', () => {
    mongodb.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
      if (err) throw err;
      client
        .db('jobs-api')
        .collection('jobs-opportunities')
        .insertMany(csvData, (err, res) => {
          if (err) throw err;
          client.close();
        });
    });
  });

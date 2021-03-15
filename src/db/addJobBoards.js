const JobBoard = require('../models/JobBoard');
const mongodb = require('mongodb').MongoClient;
const jobBoardsJSON = require('../assets/jobBoards.json');
const mongoose = require('mongoose');

let url = 'mongodb+srv://admin:admin@cluster0.qupsw.mongodb.net/jobs-api?retryWrites=true&w=majority';
//'mongodb://localhost:27017/jobs-api';

const jobBoardsList = jobBoardsJSON['job_boards'];
const jobBoardsDatabaseList = [];

jobBoardsList.map(board => {
  jobBoardsDatabaseList.push(
    new JobBoard({
      name: board.name,
      rating: board.rating,
      rootDomain: board.root_domain,
      logoFile: board.logo_file,
      description: board.description
    })
  );
});

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
JobBoard.insertMany(jobBoardsDatabaseList)
  .then(function() {
    console.log(jobBoardsDatabaseList.length);
    console.log('Data inserted'); // Success
  })
  .catch(function(error) {});

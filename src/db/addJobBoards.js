const JobBoard = require('../models/JobBoard');
const mongodb = require('mongodb').MongoClient;
const jobBoardsJSON = require('../assets/jobBoards.json');

let url = 'mongodb://localhost:27017/';

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

mongodb.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  client
    .db('jobs-api')
    .collection('jobs-boards')
    .insertMany(jobBoardsDatabaseList, (err, res) => {
      if (err) throw err;
      client.close();
    });
});

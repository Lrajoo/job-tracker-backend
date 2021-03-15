const express = require('express');
const cors = require('cors');
require('./db/addJobBoards');
require('./db/addJobOpportunities');
const JobOpportunity = require('./models/JobOpportunity');
const JobBoard = require('./models/JobBoard');

const app = express();
const port = process.env.PORT || 3000;

//app.use(express.json());
app.use(cors());
app.post('/opportunities', async (req, res) => {
  const jobOpportunity = new JobOpportunity(req.body);
  try {
    await jobOpportunity.save();
    res.status(201).send(jobOpportunity);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get('/opportunities', async (req, res) => {
  try {
    const opportunities = await JobOpportunity.find({});
    res.send(opportunities);
  } catch (e) {
    res.status(500).send();
  }
});

app.get('/opportunities/:source', async (req, res) => {
  const source = req.params.source;
  try {
    const opportunity = await JobOpportunity.find({ jobSource: source });
    if (!opportunity) {
      return res.status(404).send();
    }
    return res.send(opportunity);
  } catch (e) {
    res.status(500).send();
  }
});

app.get('/boards', async (req, res) => {
  try {
    const boards = await JobBoard.find({});
    res.send(boards);
  } catch (e) {
    res.status(500).send();
  }
});

app.get('/boards/:name', async (req, res) => {
  const name = req.params.name;
  try {
    const board = await JobBoard.find({ name: name });
    if (!board) {
      return res.status(404).send();
    }
    return res.send(board);
  } catch (e) {
    res.status(500).send();
  }
});

app.listen(port, () => {
  console.log('server is up on port 3000');
});

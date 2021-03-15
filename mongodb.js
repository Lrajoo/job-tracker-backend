const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'Jobs';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('unable to connect to db');
  }
  const db = client.db(databaseName);
  //db.collection('users').insertOne({ name: 'Lingess', age: 27 });

  //   db.collection('users').insertMany([{ name: 'Jen', age: 23 }, { name: 'Adam', age: 29 }], (error, result) => {
  //     if (error) {
  //       return console.log('unable to insert documents');
  //     }
  //     console.log(result.ops);
  //   });

  db.collection('users').findOne({ name: 'Lingesss' }, (error, result) => {
    if (error) {
      return console.log('unable to fetch');
    }
    console.log(result);
  });
});

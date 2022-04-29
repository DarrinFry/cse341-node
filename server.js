// require("dotenv").config();
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000;
// // const env = require("dotenv").config();

// app.use('/', require('./routes'))

// app.listen(port, () => {
//     console.log(`Running on port ${port}`)
// })
 
// const MongoClient = require('mongodb').MongoClient;
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cse341.jubgr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// MongoClient.connect(uri, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("test");
//     dbo.collection("user").find().toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close()
//     });
// });

const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});

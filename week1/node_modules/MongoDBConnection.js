
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dfry:Sw!mm3r22@cse341.jubgr.mongodb.net/cse341?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


const express = require('express');
const cors = require('cors');
 const { MongoClient, ServerApiVersion } = require('mongodb');
require ('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

/// MIDDLEWARE
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.w1zgr.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log(' car services DB activittedd')
  // perform actions on the collection object
  client.close();
});


// TO CHK THE connect, we make a API
app.get('/',(req,res)=> {
    res.send('IM running server CARr');

});
app.listen(port,()=>{
    console.log('Listennnn to porrt', port);
})
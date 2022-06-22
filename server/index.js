const express = require('express');
const cors = require('cors');
 const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require ('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

/// MIDDLEWARE
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.w1zgr.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run (){
    try {
        await client.connect();
        const serviceCollection =client.db('car-services').collection('services');

        // TO LOAD ALL DATA
        app.get ('/service', async(req,res)=>{
            const query={};
        const cursor =serviceCollection.find(query);
        const services =await cursor.toArray();
        res.send(services);
        })

        // TO LOAD SINGLE DATA
        app.get ('/service/:id', async(req,res)=>{
            const id=req.params.id;
            const query ={_id:ObjectId(id)};
            const service =await serviceCollection.findOne(query);
            res.send(service);
        })


    }
    finally{

    }
}
run().catch(console.dir);



// TO CHK THE connect, we make a API
app.get('/',(req,res)=> {
    res.send('IM running server CARr');

});
app.listen(port,()=>{
    console.log('Listennnn to porrt', port);
})
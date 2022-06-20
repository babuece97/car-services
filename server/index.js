const express = require('express');
const cors = require('cors');
require ('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

/// MIDDLEWARE
app.use(cors());
app.use(express.json());

// TO CHK THE connect, we make a API
app.get('/',(req,res)=> {
    res.send('IM running server CAR');

});
app.listen(port,()=>{
    console.log('Listennnn to porrt', port);
})
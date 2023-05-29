const { MongoClient } = require("mongodb");
 const express = require('express');
 

 const app = express();
 const bodyParser = require('body-parser');
 //parse json data and add it to in req body
 app.use(bodyParser.json());

 app.listen(3000, () => {
  console.log("Server start at port 3000");
 })

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://Root:12345@cluster0.ajizdin.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
async function run() {
    try {
        await client.connect();
        console.log("Connected atles correctly to server");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);


//create routes

app.get('/', (req, res)=>{
  res.send("Hello Hello");
});

app.post('/api/cars', (req, res)=>{
  const {name, brand} = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car Details Added Successfully !!");
})

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Root:12345@cluster0.ajizdin.mongodb.net/myDatabase',{
  useNewUrlParser:true,//configurations
  useUnifiedTopology: true,//configurations
})
.then(()=> {console.log("Connection Establish nodejs with mongocompas")})
.catch((error)=> {console.log("Receieved an Error")});
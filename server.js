 //server insances 
const express = require('express'); 
//active server on 3000 port
 const app = express();    
 
//used to parse req.body in express -> PUT or POST
 const bodyparser = require('body-parser');

//Specifically Parse JSON data and Add it to the request.body object
 app.use(bodyparser.json());

//active the server
app.listen(3000, () => {
    console.log("Server Started at port no. 3000");
});
//get request
app.get('/', (req, res) => {
  res.send("Hello Ji");
})
//post request
app.post('/api/cars', (req, res)=>{
  const {name, brand} = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car data Posted");

})
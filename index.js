const express = require("express");
const app = express();

//load data from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for todoAPI
const routes = require("./routes/todos");

//mount the route API
app.use("/api/v1",routes);

//start server
app.listen(PORT , ()=>{
    console.log(`Server Started At ${PORT}`);
})

//connect to the DB
const dbConnect = require("./config/database");
dbConnect();

//default route

app.get("/",(req,res)=>{
    res.send("<h1>this is the homepage guys");
})

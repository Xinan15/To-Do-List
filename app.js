//jshint esversion:6

// To require the packages installed: express and body-parser
const express = require("express");
const bodyParser = require("body-parser");

// To create app constant by using express
const app = express();


// To create a simple get route
app.get("/",function(req,res){
    res.send("Hello");
});

// To listen on port 3000

app.listen(3000,function(){
    console.log("Server started on prot 3000");
});
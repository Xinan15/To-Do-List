//jshint esversion:6

// To require the packages installed: express and body-parser
const express = require("express");
const bodyParser = require("body-parser");

// To create app constant by using express
const app = express();

// To store todos into a collection: array
var items = [];

// To set up bodyparser
app.use(bodyParser.urlencoded({extended:true}));

// To tell Express to serve up the public folder as a static resource
app.use(express.static("public"));

// To set app view engine into ejs
// This line has to be put below the: const app = express(); (After the app is created.)
app.set('view engine', 'ejs');

// To create a simple get route
app.get("/",function(req,res){

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);
    

    // To render a file called index.ejs, and pass it a variable called kindOfDate
    // A key value pair: kindOfDate = day
    res.render("index",{kindOfDate: day, newListItems: items});
});

// To handle post taht goes to the particular route (here is home route)
// will trigger a callback function

app.post("/", function(req,res){
    var item = req.body.newItem;

    items.push(item);

    res.redirect("/");
})

// To listen on port 3000

app.listen(3000,function(){
    console.log("Server started on prot 3000");
});
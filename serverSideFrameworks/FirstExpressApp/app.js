var express = require("express");
var app = express();

// "/" -> Hi there!
app.get("/", function(req, res){
    res.send("Hi there");
})

// "/bye" -> GoodBye
app.get("/bye", function(req, res){
    res.send("GoodBye");
})

// "/dog" -> Meow
app.get("/dog", function(req, res) {
    res.send("Meow");
})

app.get("/r/:subreddit", function(req, res) {
    console.log(req.params.subreddit);
    res.send("You are on a subreddit");
})

app.get("*", function(req, res) {
    res.send("You are a start!!!");
})

app.listen(3000, function(){
    console.log("Server has started");
});
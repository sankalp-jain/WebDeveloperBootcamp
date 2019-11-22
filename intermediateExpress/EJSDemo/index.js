var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
    res.send("Welcome to Home Page");
})

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
})

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post1", author: "Susy"},
        {title: "Post2", author: "Susy1"},
        {title: "Post3", author: "Susy2"},
    ]
    res.render("posts", {posts: posts});
})

app.listen(3000, function() {
    console.log("Server Started!!!");
});
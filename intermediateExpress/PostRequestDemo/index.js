var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
var friends = ["Tony", "Sankalp", "Abhinav", "Shrajal"];


app.get("/", function (req, res) {
    res.render("home"); 
})

app.post("/addFriend", function (req, res) {
    console.log(req.body);
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
})

app.get("/friends", function (req,res) {
    res.render("friends", {friends: friends});  
})

app.listen(3000, function (req, res) {
    console.log("Server Started!!!");
})
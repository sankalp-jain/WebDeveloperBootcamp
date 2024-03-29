var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
})

app.get("/results", function(req, res){
    var query = req.query.search;
    var url = "https://www.omdbapi.com/?apikey=b39d1a6&s=" + query; 
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var parsedData = JSON.parse(body);
            res.render("results", {parsedData: parsedData});
        }
    })
})

app.listen(3000, function (req, res) {
    console.log("Server Started!!!");
})
var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hey, welcome to my assignment");
})

app.get("/speak/:animalName", function(req, res) {
    if(req.params.animalName === "pig")
        res.send("The pig says 'Oink'");
    else if(req.params.animalName === "cow")
        res.send("The cow says, 'Moo'");
    else if(req.params.animalName === "dog")
        res.send("The dog says 'Woof Woof!!!'");
})

app.get("/repeat/:string/:number", function(req, res){
    var result = "";
    for (var i = 0; i < Number(req.params.number); i++)
        result += (req.params.string);
    res.send(result);
})

app.get("*", function(req, res) {
    res.send("Page Not Found");
});

app.listen(3000, function() {
    console.log("Server started");
})
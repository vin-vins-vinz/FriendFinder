//Setup connection with heroku
//install npm inpendencies: express, bodyparser

var express = require("express");
var bodyParser = require("body-parser");

//setup node with "express"
var app = express();

//setup port for heroku app with bodyParser
var PORT = process.env.PORT || 8888;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//setup router with routing maps in routing folder
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Port listener to start server
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})
//setup npm path package for correct file path
var path = require("path");

//html page routing function
module.exports = function(app){
//HTML GET requests
//Set Home page as default route
    app.use(function(req, res){
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
//Survey Questions page
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
};
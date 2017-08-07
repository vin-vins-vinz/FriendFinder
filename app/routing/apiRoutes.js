//Linking our routes to data
var friendsData = require("../data/friendsData");

//Routing data function
module.exports = function(app){
    //API POST requests, to show all possible results of friends in database.
    app.post("/api/friends", function(req, res){
        res.json(friendsData);
        console.log(friendsData);
    });
};
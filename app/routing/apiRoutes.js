//Linking our routes to data
var friendsData = require("../data/friends");

//Routing data function
module.exports = function(app){
    //API GET request, to show all possible results of friends in database when user visit this API link.
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });
};
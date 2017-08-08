//Linking our routes to data
var friendsData = require("../data/friends");

//Routing data function
module.exports = function(app){
    //API GET request, to show all possible results of friends in database when user visit this API link.
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });

    //by getting User's data filled out in survey html page, create an object.
    //use a for loop to loop through friendsData array to compare and find matching result.
    //use post method, to push this new user's data into the friendsData object. 
    //app.post("/api/friends", function(req,res){});
};
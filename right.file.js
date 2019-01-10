var fs = require("fs");

fs.writeFile("movies.txt", "Die, hard", function(err){
    if(err) return console.log(err);
    console.log("Write Successful");
})
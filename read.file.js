var fs = require("fs");

fs.readFile("movies.txt", "utf8", function(err){
    if(err) return console.log(err);
    console.log("YAY")
})
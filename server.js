const express = require("express");

const app = express();

app.get("/", function(req,res){
  res.send("<h1>hello world</h1>");
});
app.get("/shapeai", function(req,res){
  res.send("<h1>shapeai</h1>");
});



app.listen(3000, function(){
  console.log("server has started on port 3000");
});

//jshint esversion:6
const bodyParser = require("body-parser");
const express = require("express")
// const request = require("request")

const https = require("https")
const app = express();

var items = ["apple","banana","oranges"];

app.use(express.static("public"))

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({
  extended: true
}));
// app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("index",{})
})

app.get("/AboutMe",function(req,res){
  res.render("index",{})
})

app.get("/ContactMe",function(req,res){
  res.render("index",{})
})

app.get("/Testimonials",function(req,res){
  res.render("index",{})
})



app.listen(3000, function() {
  console.log("Server started on port 3000");
});


const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){

    var num1 = req.body.num1;
    var num2 = req.body.num2;

    var a =+num1;
    var b =+num2;
    var result = a+b;

    res.send("the result of the calucaltion is :" + result);
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/bmicalculator",function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight/(height*height);

    res.send("the result of the bmi is :" + bmi);
});

app.listen(3000,function(req,res){
    console.log("Server is running on port 3000");
});
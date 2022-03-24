const express= require("express");          //adding express module in the project
const bodyParser= require("body-parser");   //required for post request.

const app= express();  //using express module access by app constant
app.use(bodyParser.urlencoded({extended: true}));  //in order to grab the information that get post to your server from an html use this syntax.
//in order to use it install npm install body-parser

app.get("/", function(req, res){
    res.sendFile (__dirname + "/index.html");   //__dirname gives the present directory 
    //senfFile use to send file.
});

app.get("/bmicalculator", function(req, res){
    res.sendFile (__dirname + "/bmiCalculator.html");   //__dirname gives the present directory 
});

app.post("/", function(req, res){
    // console.log(req.body.num1);   //req.body.num1 store value of num1
    var n1= Number(req.body.num1);   //Number require to convert it in number otherwise it act as text.
    var n2= Number(req.body.num2);
    var result= n1+n2;
    res.send("The result of the calculation is: "+ result);
    //send is used to just send a string not a file.
});

app.post("/bmicalculator", function(req, res){
    // console.log(req.body.num1);   //req.body.num1 store value of num1
    var n1= parseFloat(req.body.weight);   //Number require to convert it in number otherwise it act as text.
    var n2= parseFloat(req.body.height);
    var bmi= (n1/(n2*n2));
    res.send("Your BMI is: "+ bmi);
});

app.listen(5000, function(){
    console.log("Server is working");
});
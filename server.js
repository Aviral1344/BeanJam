
const express = require("express");
var bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app= express();

const uri="mongodb+srv://aviral_1344:beanjam2023@beanjam.dcogep7.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri);
var dbs = mongoose.connection
dbs.on('error',()=>console.log("error in connecting to database"));
dbs.once('open',()=>console.log("Connection to MongoDB database successful :)"))

app.listen(8000,() => {
    console.log("Server started on port 8000");
})

var path= require("path");

app.set("view-engine", "ejs")
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/",(req,res) =>{
    res.render("home.ejs")
}) 

app.get("/login",(req, res) =>{
    res.render("login.ejs")
})

app.get("/index",(req, res) =>{
    res.render("index.ejs")
})

app.post("/login",async (req, res) =>{
    var email= req.body.emailL;
    var password= req.body.passwordL;

    try{
        const user= await dbs.collection("users").findOne({"email": email});
        console.log(user);
        if(user.password == password){
            return res.redirect("/index")
        }
        else{
            res.send("Incorrect Password")
        }
    }
    catch{
        res.send("Incorrect credentials")
    }
})

app.get("/signup",(req, res) =>{
    res.render("signup.ejs",{signup:"signup.ejs"})
})

app.post("/signup",(req,res) =>{
    var name= req.body.full_name;
    var email= req.body.email;
    var password= req.body.password;

    var data= {
        "name": name,
        "email": email,
        "password": password
    };
    
    
    dbs.collection("users").insertOne(data,(err,collection) =>{
        if(err){
            throw err;
        }
        console.log("User inserted successfully")
    });

    return res.redirect("/login")

})


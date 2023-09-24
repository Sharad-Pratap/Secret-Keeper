//jshint esversion:6
import 'dotenv/config'
import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import bcrypt from "bcrypt";

const saltRounds = 10;

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');



mongoose.connect("mongodb://127.0.0.1:27017/userDB")
.then(()=>{
    console.log("connected to MongoDB Database");
})
.catch((err)=>{
    console.log(err);
})


const userSchema = new mongoose.Schema({
    email : String,
    password : String
});



const User = new mongoose.model('User', userSchema);



app.get("/", (req,res)=>{
    res.render("home");
})
app.get("/login", (req,res)=>{
    res.render("login");
})
app.get("/register", (req,res)=>{
    res.render("register")
})

app.post("/register",(req,res)=>{
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        const user = new User({
            email : req.body.username,
            password : hash
        })
        user.save().then(()=>{
            res.render("secrets");
        })
        .catch((err)=>{
            console.log(err);
        })
       
    });
    

})

app.post("/login", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({email : username})
    .then((foundUser)=>{
        bcrypt.compare(password, foundUser.password, function(err, result) {
            if(result === true ){
                res.render("secrets");
            }
            
        });   
    })
    .catch((err)=>{
        console.log(err);
    })
})


app.listen(3000, ()=>{
    console.log("Server has been running on PORT 3000");
})
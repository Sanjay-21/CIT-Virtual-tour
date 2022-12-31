const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser"); 

var http = require('http');
var fs = require('fs');

mongoose.connect("mongodb+srv://admin:pjuSkOIzxsbGfN2Z@cluster0.3b7ya.mongodb.net/formDB", {useNewUrlParser:true}, {useUnifiedTopology:true})



// createadata schema
const formSchema={
    name:String,
    email:String,
    course:String
}

const Form=mongoose.model("Form",formSchema);

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/form.html");
})


app.post("/",function(req,res){
    let newForm=new Form({
        name:req.body.name,
        email:req.body.email,
        course:req.body.course
    });
    newForm.save();
    res.writeHead(200,{'Content-Type':'text/html'});
    res.redirect('/');
    fs.readFile('./ index.html',null,function(error,data) {
    if(error){
    
        res.writeHead(404);
        res.write('File not found!');
        res.write(data);
    }else{
        res.end();
    }
    });
})

app.listen(process.env.PORT || 3000)


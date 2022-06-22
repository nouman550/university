const express= require("express");

var path=require('path');
//var async = require('async');
const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));




module.exports = {
  devtool: "source-map",
}











require("./db/conn");
const Mongodb=require("./models/mongodbs");

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
res.sendFile(path.join(__dirname +'/index.html'))
});
     //create a new user in our database
     app.post("/contactform",async(req,res)=>{
        try{
      const registerEmploy=new Mongodb({
         name: req.body.name,
         email: req.body.email,
        subject: req.body.subject, 
        discription: req.body.discription,
        
      
      })
      const regist=await registerEmploy.save();
    //  console.log("New employee has been added");
    //  res.send("New employee has been added into the database with ID = "+req.body.id+ " and Name = "+req.body.name+ " and Name = "+req.body.email+ " and Name = "+req.body.subject+ " and Name = "+req.body.discription);
      
    res.writeHead(302, {
      'Location': 'https://www.fiverr.com/noumanranjha/develop-responsive-and-professional-wordpress-website-design'
    });
    res.end();

    
        } 
        catch(error)
        {
            res.status(400).send(error);
        }
     });
    
     

     app.listen(8088,'0.0.0.0', () => {
      console.log("Successfullly listin ning on port 8080")
    })

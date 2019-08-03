var mongoclient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

mongoclient.connect(url,(err,db)=>{
    if(err) throw err;
    console.log("Datbase created");
     var dbo=db.db("mydb");
     var planets=[{Planet_name:'mercury',position:1},
     {Planet_name:'Venus',position:2},
     {Planet_name:'Earth',position:3},
     {Planet_name:'Mars',position:4},
     {Planet_name:'Jupiter',position:5},
     {Planet_name:'Saturn',position:6},
     {Planet_name:'Uranus',position:7},
     {Planet_name:'Neptune',position:8},
    ];
     dbo.collection("Planets").insertMany(planets,(err,res)=>{
         if(err) throw err;
         console.log(res.insertedCount+" Planets");
         dbo.collection('Planets').find({},{projection:{_id:0}}).toArray((err,result)=>{
             console.log(result);
         });
         
             db.close();
         })
        
             
     })
    

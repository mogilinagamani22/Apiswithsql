const express=require("express")
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const db=require("./db")
app.get("/mobiles",(req,res)=>{
    db.getmobiles()
    .then((mobiles)=>{
        res.send(mobiles)
    })
    .catch(()=>{
        res.send("error")
    })
   
})
app.post("/mobiles",(req,res)=>{
    db.addMobiles(req.body.id,req.body.name,req.body.price,req.body.ram,req.body.storagee)
    .then(()=>{
        res.send(req.body)
    })
    .catch(()=>{
        res.send("error")
    })
    
})
app.put("/mobiles",(req,res)=>{
    db.updateMobiles(req.body.id,req.body.name,req.body.price,req.body.ram,req.body.storagee)
    .then(()=>{
        res.send(req.body)
    })
    .catch(()=>{
        res.send("error")
    })
})
app.delete("/mobiles",(req,res)=>{
    db.deleteMobiles(req.body.id)
    .then(()=>{
        res.send(req.body.id)
    })
    .catch(()=>{
        res.send("error")
    })
})
app.listen(5000,()=>{
    console.log("server is started")
})
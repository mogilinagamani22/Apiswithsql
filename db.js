const sql=require("mysql2")
const mysql=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'techv1@3',
    database:'ExpressJs'
});
function getmobiles(){
    return new Promise ((success,reject)=>{
        mysql.query(`select * from mobiles`,(err,rows)=>{
            if(err){
                reject(err)
            }
            else{
                success(rows)
            }
        })
    })
   
}
function addMobiles(i,n,p,r,s){
    return new Promise((success,reject)=>{
        mysql.query(`insert into mobiles(id,name,price,ram,storagee) values(?,?,?,?,?)`,[i,n,p,r,s],(err,res)=>{
            if(err){
                reject(err)
            }
            else{
                success(res)
            }
        })
    })
    
}

function updateMobiles(i,n,p,r,s){
    return new Promise((success,reject)=>{
        mysql.query(`update mobiles set name=?, price=?, ram=?, storagee=? where id=?`,[n,p,r,s,i],(err,res)=>{
            if(err){
                reject(err)
            }
            else{
                success(res)
            }
        })
    })
   
}

function deleteMobiles(id){
    return new Promise((success,reject)=>{
        mysql.query(`delete from  mobiles where id=?`,[id],(err,res)=>{
            if(err)
            {
                reject(err)
            }
            else{
                success(res)
            }
        })
    })
   
}

module.exports={
    getmobiles,addMobiles,updateMobiles,deleteMobiles
}
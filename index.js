console.log("Frist solve proble the write ");
const express = require("express");
const app = express();
app.get('/',(req,res)=>{
res.send("my frist react App");
});
app.listen(800,()=>{
    console.log("is running on port 800");
});
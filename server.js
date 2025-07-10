const express = require("express")
const app = express();


app.get('/api/get',(req,res) => {
     res.send({message:"hello back to nodejs we are writing a node js code"})
})



app.listen(8000,(req,res) =>{
    console.log("listening to 8000");
})

const express = require("express")
const app = express();


app.get('/api/get',(req,res) => {
     res.send({message:"there are some changes commited in this code please read it carefully"})
})



app.listen(8000,() =>{
    console.log("listening to 8000");
})

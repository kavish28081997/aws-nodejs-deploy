const express = require("express")
const app = express();


app.get('/api/get',(req,res) => {
     res.send({message:"hello everyone i am here please listen me i want to say something to you"})
})



app.listen(8000,() =>{
    console.log("listening to 8000");
})

const express = require("express")
const app = express();


app.get('/api/get',(req,res) => {
     res.send({message:"hello everyone i am here please listen me i want to say something to you this is the nodejs cicd pipeline which built in aws ec2 server please add this in new file"})
})



app.listen(8000,() =>{
    console.log("listening to 8000");
})

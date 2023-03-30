import express from "express"

const port=5000
const app=express()

app.get("/home",(req,res)=>{
    res.send(req.host)
})


app.listen(port,()=>{

    console.log(`Server is listening at ${port}`)
})

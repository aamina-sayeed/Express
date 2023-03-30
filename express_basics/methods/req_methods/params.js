import express from "express"

const port=5000
const app=express()

app.get("/home/:id",(req,res)=>{
    res.send(req.params)
})


app.listen(port,()=>{

    console.log(`Server is listening at ${port}`)
})

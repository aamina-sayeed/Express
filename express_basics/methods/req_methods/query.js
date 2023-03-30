import express from "express"

const port=5000
const app=express()

app.use(express.json())

app.get("/*",(req,res)=>{
    res.send(req.query)
})


app.listen(port,()=>{

    console.log(`Server is listening at ${port}`)
})

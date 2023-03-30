import express from "express"

const port=5000
const app=express()

app.use(express.json())

app.get("/home",(req,res)=>{
   
   res.sendStatus(200)
})


app.listen(port,()=>{

    console.log(`Server is listening at ${port}`)
})

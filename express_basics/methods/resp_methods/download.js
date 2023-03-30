import express from "express"

const port=5000
const app=express()

app.use(express.json())

app.get("/home",(req,res)=>{
    res.download("/home/aamina/expressjs/Express/express_basics/intro.txt")
})


app.listen(port,()=>{

    console.log(`Server is listening at ${port}`)
})

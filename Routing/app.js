import express from "express"
import admin_api from "./controllers/admin/index.js"
import guestRoutes from "./controllers/guest/index.js"
import userRoutes from "./controllers/users/index.js"

const port=5000
const app=express()

app.use("/admin",admin_api)
app.use("/users",userRoutes)
app.use("/guest",guestRoutes)
app.get("/home",(req,res)=>{
    res.status(200).send(req.host)
})

app.use((req,res)=>{
    res.status(404).json({msg:"Route not found"})
})

app.listen(port,()=>{

    console.log(`Server is listening at ${port}`)
})

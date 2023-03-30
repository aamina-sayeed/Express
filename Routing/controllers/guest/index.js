import express  from "express";

const guestRoutes=express.Router()

guestRoutes.get("/register",(req,res)=>{
    res.status(200).json({msg:"guest register page"})
})

guestRoutes.get("/login",(req,res)=>{
    res.status(200).json({msg:"guest login page"})
})

export default guestRoutes

//export multiple at same time 
//export {fn1,fn2}
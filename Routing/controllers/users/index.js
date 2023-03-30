import express  from "express";

const userRoutes=express.Router()

userRoutes.get("/register",(req,res)=>{
    res.status(200).json({msg:"user register page"})
})

userRoutes.get("/login",(req,res)=>{
    res.status(200).json({msg:"user login page"})
})

export default userRoutes

//export multiple at same time 
//export {fn1,fn2}
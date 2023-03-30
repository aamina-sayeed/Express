import express  from "express";

const router=express.Router()

router.get("/register",(req,res)=>{
    res.status(200).json({msg:"admin register page"})
})

router.get("/login",(req,res)=>{
    res.status(200).json({msg:"admin login page"})
})

export default router
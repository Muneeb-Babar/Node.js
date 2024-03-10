import express from "express";
import Orders from '../models/Orders.mjs'

const router=express.Router()

router.get('/',async(req,res)=>{
    const orders=await Orders.find()
    res.send({message:"Data Fetched Successfully",Data:orders})
})

router.post('/add',async(req,res)=>{
    await Orders.create(req.body)
    res.send({message:'Oredr Added Successfully'})
})


export default router

import express from 'express'

const router=express.Router()

const getData=[{ "id": 1, "Name": "Muneeb", "Subject": "Programming", "Marks": 95, "id": 1 },{"Name": "Hassam", "Subject": "Programming", "Marks": 89,}]

router.get('/',(req,res)=>{
    res.send({message:'data Fetched',getData})
})

export default router


// mongodb+srv://muneeb63:<password>@cluster0.rjlimur.mongodb.net/
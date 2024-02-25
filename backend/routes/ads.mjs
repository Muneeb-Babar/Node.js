import express from "express";
import Ads from '../models/Ads.mjs'

const router=express.Router()

router.get('/',async(req,res)=>{
    const ads= await Ads.find()
    res.send({message:'Data Fethch Successfully',products:ads})
})

router.get('/:id', async (req, res) => {
    try {
        const ad = await Ads.findOne({ _id: req.params.id });
        res.send({ message: 'Data Fetched Successfully', singleProduct: ad });
    } catch (e) {
        res.send({ message: e.message });
    }
});

router.post('/post', async (req, res) => {
    try {
        const ad = new Ads(req.body)
        await ad.save()
        console.log(req.body)
        res.send({ message: 'Ad posted successfully' })
    } catch (e) {
        res.send({ message: e.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updatedAd = await Ads.findOneAndUpdate(
            { _id: req.params.id },req.body, 
            { new: true } // To return the updated document
        );
        res.send({ message: 'Ad updated successfully', updatedAd });
    } catch (e) {
        res.send({ message: 'Error updating ad', error: e.message });
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const deletedAd=await Ads.deleteOne(
            { _id: req.params.id },req.body, 
            { new: true })
            res.send({message:'Ad Deleted Successfully',deletedAd})
    }
    catch(e){
        res.send({ message: 'Error deleting ad', error: e.message });
    }
})

export default router

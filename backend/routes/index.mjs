import express from 'express'
import products from './products.mjs'
import user from './user.mjs'
import ads from './ads.mjs'

const router=express.Router()

router.use('/products',products)
router.use('/user',user)
router.use('/ads',ads)


export default router
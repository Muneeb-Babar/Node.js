import express from 'express'
import products from './products.mjs'
import user from './user.mjs'
import ads from './ads.mjs'
import order from './order.mjs'

const router=express.Router()

router.use('/products',products)
router.use('/user',user)
router.use('/ads',ads)
router.use('/order',order)


export default router
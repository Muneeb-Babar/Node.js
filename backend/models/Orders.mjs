import mongoose from 'mongoose'
const { Schema } = mongoose

const ordersSchema = new Schema({
    adId:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default:1
    },
    userId:{
        type:String,
        required:true,
    }
})

const Orders = mongoose.model('orders', ordersSchema)

export default Orders
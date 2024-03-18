import mongoose from "mongoose";
const { Schema } = mongoose;

const adsSchema = new Schema({
title: {
    type:String,
    required:true
},
description: {
    type:String,
    required:true
},
brand: {
    type:String,
    required:true
},
location: {
    type:String,
    required:true
},
price: {
    type:Number,
    required:true
},
image: {
    type:String,
    required:true
}
});
const Ads = mongoose.model('ads', adsSchema);

export default Ads

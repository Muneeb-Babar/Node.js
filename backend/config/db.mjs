import mongoose from 'mongoose'
import {MONGO_URL} from '../config/enviroment.mjs'
mongoose.connect(MONGO_URL);

export default mongoose
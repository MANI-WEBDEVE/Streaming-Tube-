import mongoose from "mongoose";

import { DB_NAME } from "../constant.js";



const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log(`\n mongoDB connected !! DB HOsT: ${connectInstance.connection.host}`)
    } catch (error) {
        console.log('MongoDB connection Problem: ', error, DB_NAME)
        process.exit(1) 
    } 
}

export default connectDB
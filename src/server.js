import dotenv from "dotenv";
import connectDB from "./db/app.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env",
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is start: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`error : ${err}`)
})




//* Professional approche connect DATA BASE

//* IIFE use connect Data Base

/*
import express from 'express'

const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB-URI}/${DB_NAME}`)
        app.on('error', (error)=>{
            console.log('ERROR: ' , error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App Start and Prot is ${process.env.PORT}`)
        })
    } catch (error) {
        console.error('Error:' , error);
        throw error
    }
})()
*/

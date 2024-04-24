import express from "express";

import cookieParser from "cookie-parser";

import cors from 'cors'

const app = express();


app.use(cors(
    {
        origin: process.env.CROS_ORIGIN,
        credentials:true
    }
))
app.use(express.json({limit:'16kb'})) //* ---> ya line json ko read kara ke or 16kb sa zada ka data nahi ayega 

app.use(express.urlencoded({extended: true, limit:'16kb'})) //* ---> ya  line URL ka Data ko encoded kata ha

app.use(cookieParser()) //* ---> ya line cookie-Parser ko config kar rahe ha

app.use(express.static('public')) //* --> ya config line media ko access da tie ha like PDF and Pics







export { app };

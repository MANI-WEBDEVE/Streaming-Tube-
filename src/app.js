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

//* routes import

import userRoutes from './routes/user.routes.js'

//* routes decleration 

app.use("/api/v1/users", userRoutes)

//* hum routes kuch asa define kara ga hum middleware likha ga  us ka andar two parameter pass honga ek { URL } kiya ha and dosra { Route } ab is sa hoga ya ka jasa hi user request kara ga tu { app.js } sa request hota houe Routes folder take jaige or us ka ander user route ko hit kara ge 

//! URL kuck asa sa hoga 
//? http://localhost:3000/api/v1/users/register
//! Agar login routes per ho ga tu { URL } kuch asa hoga
//? http://localhost:3000/api/v1/users/login



export { app };

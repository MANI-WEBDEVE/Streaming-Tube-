import { asyncHandler } from "../utils/asyncHandler.js";

import { user } from "../models/user.model.js";

import { ApiEorror } from '../utils/ApiError.js' 

import { uploadOnCloudinary } from "../utils/cloudinary.services.js";

import { ApiResponse  } from "../utils/ApiResponse.js";

//* or phire ya code excicute hoga jo ak higher order function ha ya function user ko reponse kara ga

const registerUser = asyncHandler( async (req, res) => {
       

        //? EXTRACT DATA FOR REQ.BODY 
        //? req.body ma data json and form ma through ata ha
        //? Destructure Data

         //* (1) Get the details from frontend ✔
        const {fullName, email,  password,username} = req.body
        console.log(`email: ${email}`)

        //* (2) validation  - not empty ✔

        if(
            [fullName, email, username, password].some((field) => field?.trim() === "")
        ) {
            throw new ApiEorror(400, "All field are rquired")
        }
        //* (3) check if user already exists: hum username and email sa  check kar sakta ha ✔

       let exitsUsers = await user.findOne(
            {
                $or: [{ username }, { email }]
            }
        )
        if(exitsUsers) {
            throw new ApiEorror(409 , "your are already account")
        }


        //* (4) check for images, check for avatar ✔

       const avatarLocalPath =  req.files?.avatar[0]?.path;
       const coverImageLocalPath =  req.files?.coverImage[0]?.path
        
       if(!avatarLocalPath) {
        throw new ApiEorror(400, "avatar is required")
       }

        //* (5) upload them to cloudinary, phir check avatar

       const avatar = await uploadOnCloudinary(avatarLocalPath)
       const coverImage = await uploadOnCloudinary(coverImageLocalPath)

       if (!avatar) {
        throw new ApiEorror(500, "avatar is required")
       }
        //* (6) create user object - create entry in db

      const users =  await user.create(
        {
            fullName,
            avatar: avatar.url,
            coverImage: coverImage?.url || "",
            email,
            password,
            username: username.toLowerCase()
        }
       ) 

        //* (7) remove password and refresh token field response

       const createdUser =  await user.findById(users._id).select(
        "-password, -refreshToken"
       )
        //* (8) check for user creation succesfully

       if (!createdUser) {
        throw new ApiEorror(500, "something went wrong while registering the user")
       }

        //* (9) return response
       return res.status(201).json(
        new ApiResponse(200, createdUser, 'User registered succesfully')
       )



} )

export { registerUser }
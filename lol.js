import mongoose, { Schema } from "mongoose";

import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";


//* Password ko hash form ma covert ka Method

// userSchema.pre("save", async function (next) {
//     if (!this.isModified(this.password)) return next();

//     this.password = bcrypt.hash(this.password, 10);
//     next();
// });

//* Password ko hash form ko hash form ma covert karna

// userSchema.method.isPasswordCorrect = async function (password) {
//     return await bcrypt.compare(password, this.password);
// };

//* Generate a ACCESS TOKEN
console.log(process.env.ACCESS_TOKEN_EXPIRY)


    let a = jwt.sign(
        {
            //! pass the Payload
            _id: '12121212121212121323',
            username: 'Inamkhan',
            fullName: 'MuhammadInamKhan',
            email: "inam@gmail.com",
        },
        'inamasdasd',
        {
            expiresIn: '7d',
        }
    );
    console.log(a)


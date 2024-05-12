import mongoose, { Schema } from "mongoose";

import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        avatar: {
            type: String,
            requiired: true,
        },
        coverImage: {
            type: String,
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video",
            },
        ],
        password: {
            type: String,
            required: [true, "Password is required"],
        },

        refreshToken: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

//* Password ko hash form ma covert ka Method

userSchema.pre("save", async function (next) {
    if (!this.isModified(this.password)) return next();

    this.password = bcrypt.hash(this.password, 10);
    next();
});

//* Password ko hash form ko hash form ma covert karna

userSchema.method.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

//* Generate a ACCESS TOKEN

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            //! pass the Payload
            _id: this._id,
            username: this.username,
            fullName: this.fullName,
            email: this.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    );
};

//* Generate Expiry Token
//! Refresh Token bar bar refresh hota is liya is ma kum information hote hai
userSchema.methods.generateExpiryToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    );
};

export const user = mongoose.model("User", userSchema);

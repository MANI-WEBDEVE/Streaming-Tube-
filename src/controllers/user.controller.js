import { asyncHandler } from "../utils/asyncHandler.js";

//* or phire ya code excicute hoga jo ak higher order function ha ya function user ko reponse kara ga

const registerUser = asyncHandler( async (req, res) => {
    await  res.status(200).json(
        {
            message: 'ok'
        }
    )
} )

export { registerUser }
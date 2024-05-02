import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

import { upload } from "../middlewares/multer.middleware.js"
const router = Router()
 
//* or phir idare request ayege or router hit hoga phire post request run hoge or idare sa request controller per jayege 

router.route("/register").post(
    upload.fields(
        [
            {
                name: "avatar",
                maxCount:1
            },
            {
                name:"coverImage",
                maxCount:1
            }
        ]
    ),
    registerUser
)



export default router 
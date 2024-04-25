import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router()
 
//* or phir idare request ayege or router hit hoga phire post request run hoge or idare sa request controller per jayege 

router.route("/register").post(registerUser)



export default router 
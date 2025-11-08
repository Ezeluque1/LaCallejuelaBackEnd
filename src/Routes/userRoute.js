import express from "express"
import { login } from "../Controllers/userController.js"
import {validaLogin} from "../Middlewares/userMiddleware.js"

const router  = express.Router()

router.post("/login",login,validaLogin)

export default router
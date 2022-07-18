import { Router } from "express"
import { Auth } from "../middlewares/auth"
import authRouter from "./authRouter"
import googleRouter from "./googleRouter"

const router = Router()
router.use("/auth", authRouter)
router.use("/google", Auth, googleRouter)
export default router
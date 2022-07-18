import { Router } from "express"
import { Auth } from "../middlewares/auth"

const router = Router()
import UserModel from "../models/User"
import {
  authenticate,
  createUser,
  show,
  tokenValidation,
} from "../services/authService"

router.post("/signup", async (req, res) => {
  const { name, password, enterprise } = req.body
  let user = await UserModel.findOne({ name })
  if (user) {
    return res.status(400).json({
      msg: "Usuario ya registrado",
    })
  }
  const result = await createUser({

    name,
    password

  })
  if (result.success) {
    const token = await result.data?.generateAuthToken(3600)
    return res.status(200).json({ token })
  } else {
    return res.status(result.status as number).send(result.error)
  }
})

router.post("/login", async (req, res) => {
  const { name, password } = req.body
  console.log(name, password)
  if (!name) {
    

    return res.status(401).json({ error: "No credentials" })
  }
  const result = await authenticate({
    name,
    password,
  })
  if (result.success) {
    return res.status(200).json(result.data)
  } else {
    return res.status(result.status as number).send(result.error)
  }
})
router.get("/show", Auth, async (req, res) => {
  const user = await req.user
  const result = await show(user)

  if (result.success) {
    const response = {
        user: result.data,
    }
    return res.json(response)
  } else {
    return res.status(result.status as number).send(result.error)
  }
})

router.get("/validate", async (req, res) => {
  const token = req.header("x-auth-token")
  if (!token) return res.json(false)
  const result = await tokenValidation(token)
  if (result.success) {
    return res.json(true)
  } else {
    return res.json(false)
  }
})

export default router

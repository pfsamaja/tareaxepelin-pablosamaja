import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dbConnect from "./db"
import router from "./routes/appRouter"

dotenv.config()

const PORT = process.env.PORT || 5000

//iniciar express
const app = express()
app.use(express.json())
app.use(cors()) // middleware

// apuntamos al router cuando se llama a la api
app.use("/api", router)

//escuchar el puerto
app.listen(PORT, async () => {
  await dbConnect()
  console.log(`Listening on port ${PORT}`)
})

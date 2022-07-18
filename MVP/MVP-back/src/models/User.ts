import { Model, model, Schema } from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export interface User extends Document {
  name: string
  password: string

  generateAuthToken: (caducity: number) => Promise<string>
}

export interface IUserModel extends Model<User> {
  findByCredentials(username: string, password: string): Promise<User>
  findByToken(token: string): Promise<User>
  generateAuthToken(caducity: string): Promise<string>
}

const schema = new Schema<User>({
  name: { type: String, required: true },
  password: { type: String, required: true },
})

schema.pre("save", async function (next) {
  const user = this
  if (user.isModified("password")) {
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
  }
  next()
})

schema.methods.generateAuthToken = async function (caducity: number | string) {
  const user = this
  const token = jwt.sign(
    { id: user._id },
    process.env.SECRET || "",
    { expiresIn: caducity }
  )
  return token
}

schema.statics.findByCredentials = async (name, password) => {
  console.log(name, password);
  const user = await UserModel.findOne({ name })
  console.log("User Found", user)
  if (!user) {
    return null
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password)
  if (!isPasswordMatch) {
    return null
  }
  return user
}

schema.statics.findByToken = async (token) => {
  const verified = jwt.verify(
    token,
    process.env.SECRET || ""
  ) as { id: string }
  if (!verified) {
    return null
  }

  const user = await UserModel.findById(verified.id)
  if (!user) {
    return null
  }
  return user
}

const UserModel = model<User, IUserModel>("User", schema)

export default UserModel

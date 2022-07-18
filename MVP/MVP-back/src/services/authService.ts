import { Types, Document } from "mongoose"
import UserModel, { User } from "../models/User"

export const createUser = async (data: Partial<User>) => {
  const { name, password } = data
  const user = new UserModel({ name, password})

  try {
    const savedUser = await user.save()
    return { success: true, data: savedUser }
  } catch (err) {
    return { success: false, error: err, status: 400 }
  }
}

export const userInfo = async (
  user: Document<any, any, User> &
    User & {
      _id: Types.ObjectId
    }
    ) => {
  return {
    name: user.name,
    id: user._id,

  }
}

export const show = async (
  user: Document<any, any, User> &
    User & {
      _id: Types.ObjectId
    }
) => {
  try {
    const userData = await userInfo(user)
    return { success: true, data: userData }
  } catch (err) {
    return { success: false, error: err, status: 500 }
  }
}

export const authenticate = async (data: {
  name: string
  password: string
}) => {
  const { name, password } = data
  try {
    const user = await UserModel.findByCredentials(name, password)
    if (!user) {
      return { success: false, error: "Invalid login credentials", status: 401 }
    }
    const token = await user.generateAuthToken(3600)
    const userData = await userInfo(
      user as unknown as Document<any, any, User> &
        User & {
          _id: Types.ObjectId
        }
    )
    return {
      success: true,
      data: {
        token,
        user: userData,
      },
    }
  } catch (err) {
    return { success: false, error: err, status: 500 }
  }
}

export const tokenValidation = async (token: string) => {
  try {
    const user = await UserModel.findByToken(token)
    if (!user) {
      return { success: false, error: "Could't find user", status: 401 }
    }
    return { success: true, data: user }
  } catch (err) {
    return { success: false, error: err, status: 500 }
  }
}

export const destroy = async (name: string) => {
  try {
    const foundUser = await UserModel.findOne({ name })
    if (!foundUser) {
      return { success: false, error: "Couldn't find user", status: 404 }
    }
    await foundUser.remove()
    return { success: true, data: "User deleted" }
  } catch (err) {
    return { success: false, error: err, status: 500 }
  }
}

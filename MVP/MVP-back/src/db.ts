import mongoose from "mongoose"

var db = process.env.MONGO_DB || "development"
var db_user = process.env.MONGO_USER || "admin"
var db_password = process.env.MONGO_PASS || "1w6pEYcKq4sIxBG5"

const MONGO_URI = `mongodb+srv://${db_user}:${db_password}@cluster0.vhg42ew.mongodb.net/${db}?retryWrites=true&w=majority`

console.log(MONGO_URI)

const dbConnect = async () => mongoose.connect(MONGO_URI)

export default dbConnect

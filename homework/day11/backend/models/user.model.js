import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    personal: String,
    prefer: String,
    pwd: String,
    og: Object
},{ versionkey : false})
export const User = mongoose.model("User", userSchema)  //collection 만들기
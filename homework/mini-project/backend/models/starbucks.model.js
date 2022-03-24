import mongoose from 'mongoose'

const starbucksSchema = new mongoose.Schema({
    _id: String,
    name: String,
    img: Image
})
export const Starbucks = mongoose.model("Starbucks", starbucksSchema)  //collection 만들기
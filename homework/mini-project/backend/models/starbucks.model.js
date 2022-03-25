import mongoose from 'mongoose'

const starbucksSchema = new mongoose.Schema({
    _id: String,
    name: String,
    img:
    {data: Buffer,
    contentType: String
    }
})
export const Starbucks = mongoose.model("Starbucks", starbucksSchema)  //collection 만들기
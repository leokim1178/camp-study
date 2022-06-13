import mongoose from 'mongoose';

const starbucksSchema = new mongoose.Schema(
    {
        name: String,
        img: String,
    },
    { versionkey: false },
);
export const Starbucks = mongoose.model('Starbucks', starbucksSchema); //collection 만들기

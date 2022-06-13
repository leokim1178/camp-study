import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema(
    {
        token: String,
        phone: String,
        isAuth: Boolean,
    },
    { versionkey: false },
);
export const Token = mongoose.model('Token', tokenSchema); //collection 만들기

import mongoose, { Schema } from "mongoose";
import {status, ongoing, win, lose, terminated, pending} from "../constants/constants.js";

const userSchema = mongoose.Schema({
    name: String,
    surname: String,
    email:String,
    password: String,
    address: String,
    tickets: [{
            number: Number,
            status: {
                type: String,
                enum : [pending,win,lose],
                default: pending
            }, 
            productName: String,
            productBrand: String,
            price: Number,
            competition: {
                type: Schema.Types.ObjectId, 
                ref:'Competition'}
        }]
});

const User = mongoose.model('User', userSchema)

export default User;
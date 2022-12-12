import mongoose, { Schema } from "mongoose";
import {status, ongoing, win, lose, terminated, pending} from "../constants/constants.js";

const competitionsSchema = mongoose.Schema({
    productName: String,
    productBrand: String,
    ticketPrice: Number,
    productPrice: Number,
    maxTicketNumber: Number,
    deadline: Date,
    image: String,
    status: {
        type: String,
        enum: [ongoing, terminated],
        default: ongoing
    },
    tickets: [{
            number: Number,
            status: {
                type: String,
                enum : [pending, win, lose],
                default: pending
            }, 
            owner: {
                type: Schema.Types.ObjectId, 
                ref:'User'}
        }]
});

const Competition = mongoose.model('Competition', competitionsSchema)

export default Competition;
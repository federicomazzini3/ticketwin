import mongoose, { Schema } from "mongoose";

const competionsSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    productName: String,
    productBrand: String,
    ticketPrice: Number,
    productPrice: Number,
    maxTicketNumber: Number,
    numTicketSolds: Number,
    deadline: Date,
    tickets: [{
            number: Number,
            owner: {
                type: Schema.Types.ObjectId, 
                ref:'User'}
        }]
});

const Competition = mongoose.model('Competition', competionsSchema)

export default Competition;
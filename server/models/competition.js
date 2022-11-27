import mongoose, { Schema } from "mongoose";

const competionsSchema = mongoose.Schema({
    productName: String,
    productBrand: String,
    ticketPrice: Number,
    productPrice: Number,
    maxTicketNumber: Number,
    deadline: Date,
    image: String,
    tickets: [{
            number: Number,
            owner: {
                type: Schema.Types.ObjectId, 
                ref:'User'}
        }]
});

const Competition = mongoose.model('Competition', competionsSchema)

export default Competition;
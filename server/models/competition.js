import mongoose from "mongoose";

const competionsSchema = mongoose.Schema({
    productName: String,
    productBrand: String,
    ticketPrice: Number,
    productPrice: Number,
    maxTicketNumber: Number,
    numTicketSolds: Number,
    deadline: Date,
    tickets: [{
            ticketNumber: Number,
            ticketOwner: String
        }]
});

const Competition = mongoose.model('Competition', competionsSchema)

export default Competition;
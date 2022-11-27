import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    surname: String,
    email:String,
    password: String,
    tickets: [{
            number: Number,
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
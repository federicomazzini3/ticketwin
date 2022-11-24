import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    surname: String,
    //altro da definire
    tickets: [{
            number: Number,
            productName: String,
            productBrand: String,
            price: Number,
            competition: {type: Schema.Types.ObjectId, ref:'Competition'}
        }]
});

const User = mongoose.model('User', userSchema)

export default User;